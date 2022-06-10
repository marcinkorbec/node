function addProduct(currentBasket, name, price, count = 1) {
	return [
		...currentBasket,
		{
			name,
			price,
			count,
		},
	]
}

function itemNames(basket) {
	return basket.map(item => item.name);
}

function pricessSum(basket) {
	return basket.reduce((prev, curr)=> prev + curr.price * curr.count, 0);
}

const basket = [];
const basketWithPotato = addProduct(basket, 'potato', 2.78);
const basketWithBread = addProduct(basketWithPotato, 'bread', 3.50)


console.log(itemNames(basketWithPotato));
console.log(itemNames(basketWithBread));
