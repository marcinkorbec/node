const {tickTock} = require('./tick-tock')
const events = tickTock();
events.on('secondElapsed', data => {
  console.log('mineła sekunda!', data)
});