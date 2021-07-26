const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketUl = document.querySelector('.basket-list')
const basket = new Basket();

function createBasketUi() {
 basketUl.innerText = '';
  for (const oneProductInfo of basket.getBasketSummary()) {
    const newLi = document.createElement('li');
    basketUl.appendChild(newLi).innerText = oneProductInfo;
  }
}

function addProductToBasket (event) {
  const name = event.target.dataset.name;
  const price = Number(event.target.dataset.price);

  const newProduct = new Product(name, price);
  basket.add(newProduct)
  console.log(basket)
  console.log(basket.getBasketSummary());
  createBasketUi();
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', addProductToBasket);
};
