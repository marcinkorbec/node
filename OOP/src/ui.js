const basket = new Basket();

const buyBtns = [...document.querySelectorAll('[data-id]')];

buyBtns[0].addEventListener('click', function(event) {
  console.log(event.target.dataset.id);
  console.log('Drugi sposob', this.getAttribute('data-id'));
})