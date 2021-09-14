const {TickTock} = require('./tick-tock')
const events = new TickTock();

events.on('secondElapsed', data => {
    console.log('1 sec!', data)
  })
  .on('fiveSecondElapsed', data => {
    console.log('5 sec!', data)
  })
  .once('secondElapsed', data => {
    console.log('First second!', data)
  });
