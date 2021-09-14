// const {EventEmitter} = require('events');
//
// function tickTock() {
//   const ee = new EventEmitter();
//   setInterval(() => {
//     ee.emit('secondElapsed', 'test');
//   }, 1000);
//   setInterval(() => {
//     ee.emit('fiveSecondElapsed', 'test');
//   }, 5000);
//   return ee;
// };
//
// module.exports = {
//   tickTock,
// };

const {EventEmitter} = require('events');

class TickTock extends EventEmitter {
  constructor() {
    super();
    setInterval(() => {
      this.emit('secondElapsed', 'test');
    }, 1000);
    setInterval(() => {
      this.emit('fiveSecondElapsed', 'test');
    }, 5000);
  }
}

module.exports = {
  TickTock,
}



