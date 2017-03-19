String.prototype.padRight = function(l,c) {
    var m = l;
    if(this.length > m) {
        m = ((this.length % m) + 1) * m;
    }
    return this+Array(m-this.length+1).join(c||" ");
};

var str = 'TextMustBe16Bytes';
console.log(
    str.padRight(16, '~').length
);
