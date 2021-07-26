const addProductForm = document.querySelector('.form-add-product');
const nameInput = document.querySelector('[name="product-name"]');
const priceInput = document.querySelector('[name="product-price"]');


function addProductToShop(event) {
  event.preventDefault();
  console.log(nameInput);

  const name = nameInput.value;
  const price = Number(priceInput.value);
}

addProductForm.addEventListener('submit', addProductToShop)