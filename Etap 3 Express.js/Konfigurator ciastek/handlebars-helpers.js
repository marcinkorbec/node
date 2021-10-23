const handlebarsHelpers = {
	upper: function (str) {
		str.toUpperCase();
	},
	lower: (str) => {
		str.toLowerCase();
	}
};

module.exports = {
	handlebarsHelpers,
}