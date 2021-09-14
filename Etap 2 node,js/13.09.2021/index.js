const {TickTock} = require('./tick-tock')

new TickTock()
  .on('secondElapsed', data => {
    console.log('1 sec!', data)
  })
  .on('fiveSecondElapsed', data => {
    console.log('5 sec!', data)
  })
  .once('secondElapsed', data => {
    console.log('First second!', data)
  });
