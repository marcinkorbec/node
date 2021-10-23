const handlebarsHelpers = {
	upper: function (str) {
		return str.toUpperCase();
	},
	lower: (str) => {
		return str.toLowerCase();
	},
	"find-price" : (entries, selectedItem) => {
		console.log(entries, selectedItem)
		const found = entries.find(el => {
			return el[0] === selectedItem;
		});

		if (!found) {
			throw new Error(`Nie można znaleźć ceny dla ${selectedItem},`)
		}

		const [, price] = found;
		return price;
	}
};

module.exports = {
	handlebarsHelpers,
}