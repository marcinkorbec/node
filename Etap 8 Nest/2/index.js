const basket = [];

basket.push({
	name: 'cucumber',
	count: 1,
	price: 3,
})

basket.push({
	name: 'bread',
	count: 1,
	price: 4.60,
})

const names =[];
let sum = 0;

for (let i = 0; i < basket.length; i++) {
	names.push(basket[i].name);
	sum += basket[i].price * basket[i].count;
};

console.log(names);
console.log(sum);