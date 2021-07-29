const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');
const productsList = document.querySelector('.product-ol');

const saveProductsToLocalStorage = (name, price) => {
  const oldProductsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
  console.log(oldProductsList);
  oldProductsList.push({name, price});
  localStorage.setItem('shop-products', JSON.stringify(oldProductsList));
};

const loadProductsFromLocalStorage = (name, price) => {
  const oldProductsList = JSON.parse(localStorage.getItem('shop-products')) ?? [];
  for (const oldProduct of oldProductsList) {
    addProductToShop(oldProduct.name, oldProduct.price);
  }
}

function addProductToShop (name, price) {
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
};

function handleAddProductFormSubmit(event) {
  event.preventDefault();
  const nameFromInput = nameInput.value;
  const priceFromInput = Number(priceInput.value);
  addProductToShop(nameFromInput, priceFromInput);
  saveProductsToLocalStorage(nameFromInput, priceFromInput);
};

addProductForm.addEventListener('submit', handleAddProductFormSubmit);

loadProductsFromLocalStorage();