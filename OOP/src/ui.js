const buyBtns = [...document.querySelectorAll('[data-name]')];
const basketUl = document.querySelector('.basket-list')
const buyAllBtn = document.querySelector('.buy-all')


const basket = new Basket();

function createBasketUi() {
 basketUl.innerText = '';
  for (const oneProductInfo of basket.getBasketSummary()) {
    const newLi = document.createElement('li');
    basketUl.appendChild(newLi).innerText = oneProductInfo;
  }

  const basketTotalValue = basket.getTotalValue();

  if (basketTotalValue > 0){
    buyAllBtn.disabled = false;
    buyAllBtn.innerText = `Złóż zamówienie na kwotę ${basketTotalValue.toFixed(2)} zł.`
  } else {
    buyAllBtn.disabled = true;
    buyAllBtn.innerText = 'Złóż zamówienie.';
  }
}

function addProductToBasket (event) {
  const name = event.target.dataset.name;
  const price = Number(event.target.dataset.price);

  const newProduct = new Product(name, price);
  basket.add(newProduct)
  createBasketUi();
}

function buyAllProducts() {
  const basketTotalValue = basket.getTotalValue();
  alert(`Zakupiono produkty o wartości ${basketTotalValue}`)
  basket.clear();
  createBasketUi();
}

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', addProductToBasket);
};

buyAllBtn.addEventListener('click', buyAllProducts);
