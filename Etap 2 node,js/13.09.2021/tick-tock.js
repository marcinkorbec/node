const {EventEmitter} = require('events');

function tickTock() {
  const ee = new EventEmitter();
  setInterval(() => {
    ee.emit('secondElapsed', 'test');
  }, 1000);
  return ee;
};

module.exports = {
  tickTock,
};
