Bee = (function() {
	function Bee() {
		this.c = 'in';
	}

	Bee.prototype.a = function(c) {
		c('love');
		return this;
	}

	Bee.prototype.b = function(two) {
		console.log('out');
	}

	return Bee;
})();

bee = new Bee();

bee.a(function(c) {
	console.log(c);
}).b();