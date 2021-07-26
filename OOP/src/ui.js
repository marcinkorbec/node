const basket = new Basket();

const buyBtns = [...document.querySelectorAll('[data-name]')];

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', function(event) {
    console.log(event.target.dataset.name);
    console.log('Cena 'this.getAttribute('data-name'));
  })
}
