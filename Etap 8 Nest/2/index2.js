class Basket {
	constructor() {
		this.items = [];
	}

	add(name, price, count = 1) {
		this.items.push({
			name,
			price,
			count,
		})
	}

	getNames() {
		return this.items.map(item => item.name);
	};

	getPrice() {
		return this.items.reduce((prev, curr) => prev + curr.price * curr.count, 0);
	}
}


const basket = new Basket();
basket.add('bread', 5);
basket.add('cucumber', 2.30);

console.log(basket.getNames());
console.log(basket.getPrice());
