const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');


function addProductToShop(event) {
  event.preventDefault();
  console.log(nameInput);

  const name = nameInput.value;
  const price = Number(priceInput.value);
  const newLi = document.createElement('li');
  const newStrong = document.createElement('strong');
  newStrong.innerText = name;
  const newPriceText = document.createTextNode(`${price.toFixed(2)}`);

  newLi.appendChild(newStrong);
  newLi.appendChild(newPriceText);
  basketUl.appendChild(newLi).innerText = oneProductInfo.text;
}

addProductForm.addEventListener('submit', addProductToShop)