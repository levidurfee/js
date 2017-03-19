var aesjs = require('aes-js');
var pbkdf2 = require('pbkdf2');

String.prototype.padRight = function(l,c) {
    var m = l;
    if(this.length > m) {
        m = ((this.length % m) + 1) * m;
    }
    return this+Array(m-this.length+1).join(c||" ");
};

var key = pbkdf2.pbkdf2Sync('levi.lol^s', 'peppermint', 1, 256 / 8, 'sha512');

// The initialization vector (must be 16 bytes)
var iv = [ 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34,35, 36 ];

// Convert text to bytes (text must be a multiple of 16 bytes)
var text = 'TextMustBe16ByteS'.padRight(16, '~');
//console.log(text);
var textBytes = aesjs.utils.utf8.toBytes(text);

var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var encryptedBytes = aesCbc.encrypt(textBytes);

// To print or store the binary data, you may convert it to hex
var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
console.log(encryptedHex);
// "104fb073f9a131f2cab49184bb864ca2"

// When ready to decrypt the hex string, convert it back to bytes
var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

// The cipher-block chaining mode of operation maintains internal
// state, so to decrypt a new instance must be instantiated.
var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
var decryptedBytes = aesCbc.decrypt(encryptedBytes);

// Convert our bytes back into text
var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
//console.log(decryptedText);
// "TextMustBe16Byte"
