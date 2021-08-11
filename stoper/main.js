// http://websamuraj.pl/examples/js/projekt11/

const startStopBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset')
const panel = document.querySelector('.time div');
let time = 0;
let active = false;

const timer = () => {
 if (active === false) {
   active = true;
   startStopBtn.textContent = 'Pauza';
 } else {
   active = false;
   startStopBtn.textContent = 'Start';
 }
 //  startStopBtn.classList.toggle('active');
 //  if (startStopBtn.classList.contains('active')){
 //    startStopBtn.classList.remove('active');
 //    startStopBtn.classList.
 //    startStopBtn.textContent = 'Start';
 //  } else {
 //    startStopBtn.classList.add('active')
 //    startStopBtn.textContent = 'Pauza';
 //  }
}

startStopBtn.addEventListener('click', timer);
//resetBtn.addEventListener('click', reset);