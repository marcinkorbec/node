const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsList = document.querySelector('product-ol');

function addProductToShop(event) {
  event.preventDefault();
  console.log(nameInput);

  const name = nameInput.value;
  const price = Number(priceInput.value);
  const newLi = document.createElement('li');
  const newStrong = document.createElement('strong');
  newStrong.innerText = name;
  const newPriceText = document.createTextNode(` - ${price.toFixed(2)}`);

  newLi.appendChild(newStrong);
  newLi.appendChild(newPriceText);
  productsList.appendChild(newLi)
}

addProductForm.addEventListener('submit', addProductToShop);