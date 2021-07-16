// const btn = document.querySelector('.btn-toggle-color');
// const body = document.body;
// let click = 0;
//
// btn.addEventListener('click', () => {
//   const isDarkMode = body.classList.toggle('dark-mode');
//
//   if (isDarkMode) {
//     btn.innerText = 'Turn on light mode';
//   } else {
//     btn.innerText = 'Turn on dark mode';
//   }
//   ++click;
//   document.querySelector('h1').innerText = click;
// });
//
//
// localStorage.setItem('courseName', 'Mega Kurs');
// localStorage.getItem('courseName');
//
//
// //Get last visit date
// const lastSavedVisitDate = localStorage.getItem('last-visit');
//
// if ( lastSavedVisitDate === null) {
//   console.log('You are first time here!');
// } else {
//   console.log('You were here on ' + lastSavedVisitDate)
// }
//
// //Set last visit date
// const date = new Date();
// const dateString = date.toString();
//
// localStorage.setItem('last-visit', dateString);

//----------------------------------------------------------------------------------------------

const person = {
  name: 'Marcin',
  surname: 'Korbecki',
  lifeEvents: ['1991', '2001', '2077'],
  isAlive: true,
};


console.log(JSON.stringify(person));

//----------------------------------------------------------------------------------------------
//   ZADANIE
//----------------------------------------------------------------------------------------------

// const btn = document.querySelector('.btn-toggle-color');
// const h1 = document.querySelector('h1');
//
// let click = Number(localStorage.getItem('counter'));
// h1.innerText = click;
// btn.addEventListener('click', () => {
//   let counter = ++click;
//   h1.innerText = counter;
//   localStorage.setItem('counter', String(counter));
// });
