// http://websamuraj.pl/examples/js/projekt11/

const startStopBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset')
const panel = document.querySelector('.time div');
let time = 0;
let active = false;
let idI;

const timer = () => {
 if (active === false) {
   active = true;
   startStopBtn.textContent = 'Pauza';
   idI = setInterval(start ,10)
 } else {
   active = false;
   startStopBtn.textContent = 'Start';
   clearInterval(idI)
 }
}

const reset = () => {
  time = 0;
  panel.textContent = '---';
  clearInterval(idI);
}

const start = () => {
  time++;
  panel.textContent = (time / 100).toFixed(2);
}
startStopBtn.addEventListener('click', timer);
resetBtn.addEventListener('click', reset);