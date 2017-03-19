fs = require('fs');
prompt = require('prompt');

mongoClient = require('mongodb').MongoClient;
console.log('\nLoading Config...\n');
content = fs.readFileSync('creds.json');
jsonConfig = JSON.parse(content);
console.log('\nConfig Loaded.\n');

prompt.start();

mongoClient.connect('mongodb://'
  + jsonConfig.username + ':'
  + jsonConfig.password + '@'
  + jsonConfig.hostname + ':'
  + jsonConfig.port + '/'
  + jsonConfig.database,
  function(error, db) {
    if(!error) {
      console.log('Connected\n');
    }
    db.collection('test', function(err, collection) {});
    collection = db.collection('test');

    /**
     * get info from user
     */
    function getInfo() {
      prompt.get(['username', 'email'], function(err, result) {
        if(result.username == 'done') {
          process.exit(1);
        } else {
          doc = {
            'username': result.username,
            'email': result.email,
          };
          collection.insert(doc);
          getInfo();
        }
      });
    };

    getInfo();
  });

