const basket = new Basket();

const buyBtns = [...document.querySelectorAll('[data-name]')];

function addProductToBasket (event) {
  const name = event.target.dataset.name;
  const price = Number(event.target.dataset.price);

  const newProduct = new Product(name, price);
  basket.add(newProduct)
  console.log(basket)
  basket.getBasketSummary()
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', addProductToBasket);
}
