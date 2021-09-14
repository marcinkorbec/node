const {tickTock} = require('./tick-tock')
const events = tickTock();
events.on('secondElapsed', data => {
  console.log('1 sec!', data)
});

events.on('fiveSecondElapsed', data => {
  console.log('5 sec!', data)
});