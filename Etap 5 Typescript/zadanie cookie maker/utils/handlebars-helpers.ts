const handlebarsHelpers = {
	upper: function (str) {
		return str.toUpperCase();
	},
	lower: (str) => {
		return str.toLowerCase();
	},
	findPrice : (entries, selectedItem) => {
		const found = entries.find(el => {
			return el[0] === selectedItem;
		});
		if (!found) {
			throw new Error(`Nie można znaleźć ceny dla ${selectedItem},`)
		}
		const [, price] = found;
		return price;
	},
	pricify: price => price.toFixed(2),
	isNotOnArray: (array, element) => !array.includes(element),
};

export {
	handlebarsHelpers,
}