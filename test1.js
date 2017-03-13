Bee = (function() {
	function Bee() {
		this.c = 'in';
	}

	Bee.prototype.a = function(one) {
		one('love', 'thy neighbor');
		return this;
	}

	Bee.prototype.b = function(two) {
		console.log('out');
	}

	return Bee;
})();

bee = new Bee();

bee.a(function(c, d) {
	e = c;
	console.log(e + ' ' + d);
}).b();