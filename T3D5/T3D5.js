const btn = document.querySelector('.btn-toggle-color');
const body = document.body;
let click = 0;

btn.addEventListener('click', () => {
  const isDarkMode = body.classList.toggle('dark-mode');

  if (isDarkMode) {
    btn.innerText = 'Turn on light mode';
  } else {
    btn.innerText = 'Turn on dark mode';
  }
  ++click;
  document.querySelector('h1').innerText = click;
});



//localStorage