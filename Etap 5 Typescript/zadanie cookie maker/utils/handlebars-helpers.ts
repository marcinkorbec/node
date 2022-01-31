const handlebarsHelpers = {
	upper: function (str: string) {
		return str.toUpperCase();
	},
	lower: (str: string) => {
		return str.toLowerCase();
	},
	findPrice : (entries:string[], selectedItem:string) => {
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
	isNotOnArray: (array: [], element: string) => !array.includes(element),
};

export {
	handlebarsHelpers,
}