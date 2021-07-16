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


localStorage.setItem('courseName', 'Mega Kurs');
localStorage.getItem('courseName');


//Get last visit date
const lastSavedVisitDate = localStorage.getItem('last-visit');

if ( lastSavedVisitDate === null) {
  console.log('You are first time here!');
} else {
  console.log('You were here on ' + lastSavedVisitDate)
}

//Set last visit date
const date = new Date();
const dateString = date.toString();

localStorage.setItem('last-visit', dateString);