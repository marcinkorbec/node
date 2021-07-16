const btn1 = document.querySelector('.first-btn');
const btn2 = document.querySelector('.second-btn');

const good = document.querySelector('.good');
const bad = document.querySelector('.bad');
const text = document.querySelector('.text');

//------DOWNLOAD VARIABLE FROM LOCAL STORAGE------------------------------------------

let click1 = Number(localStorage.getItem('counter-good'));
good.innerText = click1;

let click2 = Number(localStorage.getItem('counter-bad'));
bad.innerText = click2;

//------SETTING THE LISTENING TO THE BUTTONS------------------------------------------

btn1.addEventListener('click', () => {
  let counterGood = ++click1;
  good.innerText = counterGood;
  localStorage.setItem('counter-good', String(counterGood));
});

btn2.addEventListener('click', () => {
  let counterBad = ++click2;
  bad.innerText = counterBad;
  localStorage.setItem('counter-bad', String(counterBad));
});

//-------SAVE DATA AS A OBJECT IN LOCAL STORAGE---------------------------------------

let dataObj = {
  moodGood: Number(localStorage.getItem('counter-good')),
  moodBad: Number(localStorage.getItem('counter-bad')),
};

localStorage.setItem('data-info', JSON.stringify(dataObj));
let data = localStorage.getItem('data-info');
text.innerText = data;
