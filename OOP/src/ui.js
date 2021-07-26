const basket = new Basket();

const buyBtns = [...document.querySelectorAll('[data-id]')];

for (const buyBtn of buyBtns) {
  buyBtn.addEventListener('click', function(event) {
    console.log(event.target.dataset.id);
    console.log('Drugi sposob', this.getAttribute('data-id'));
  })
}
