const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsList = document.querySelector('.product-ol');

function addProductToShop(event) {
  event.preventDefault();
  const name = nameInput.value;
  const price = Number(priceInput.value);
  const newLi = document.createElement('li');
  const newStrong = document.createElement('strong');
  const newButton = document.createElement('button');
  newButton.innerText = 'Kup Teraz!';
  newButton.classList.add('btn-buy', 'btn', 'btn-primary');
  newButton.dataset.name = name;
  newButton.dataset.price = String(price);
  newStrong.innerText = name;
  const newPriceText = document.createTextNode(` - ${price.toFixed(2)}zł `);
  newLi.appendChild(newStrong);
  newLi.appendChild(newPriceText);
  newLi.appendChild(newButton);
  productsList.appendChild(newLi);
  newButton.addEventListener('click', addProductToBasket);
}

addProductForm.addEventListener('submit', addProductToShop);