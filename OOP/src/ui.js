const basket = new Basket();

const buyBtns = [...document.querySelectorAll('[data-name]')];

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', function(event) {
    console.log('Nazwa ', event.target.dataset.name);
    console.log('Cena ', Number(event.target.dataset.price));
  })
}
