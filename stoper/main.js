// http://websamuraj.pl/examples/js/projekt11/

const startStopBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset')

function toggleText() {
  if (startStopBtn.classList.contains('active')){
    startStopBtn.classList.remove('active')
    startStopBtn.textContent = 'Pauza';
  } else {
    startStopBtn.classList.add('active')
    startStopBtn.textContent = 'Start';
  }
}

startStopBtn.addEventListener('click', toggleText());