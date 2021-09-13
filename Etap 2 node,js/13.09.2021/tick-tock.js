const {EventEmitter} = require('events');

function tickTock() {
  const ee = new EventEmitter();
  setInterval(() => {
    //
  }, 1000);
  return ee;
};

module.exports = {
  tickTock,
};
