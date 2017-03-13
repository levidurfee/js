Bee = (function() {
	function Bee() {
		this.c = 'in';
	}

	Bee.prototype.a = function(one) {
		console.log(one('love'));
		return this;
	}

	Bee.prototype.b = function(two) {
		return 'out';
	}

	return Bee;
})();

bee = new Bee();

bee.a(function(c) {
	console.log(c);
	return 'wut';
}).b();