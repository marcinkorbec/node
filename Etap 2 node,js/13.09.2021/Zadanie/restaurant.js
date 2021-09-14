const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  constructor() {
    super();
  }

  open() {
    this.emit('open');
  }

  close() {
    this.emit('close');
  }

  reserveTable() {
    this.emit('reserve', -1);
  }

  cancelTableReservation() {
    this.emit('cancelReserve', +1);
  }

  takeTableWithoutReservation() {
    this.emit('withoutNow', -1);
  }

  markTableAsBroken() {
    this.emit('markTableAsBroken', -1);
  }

  cleanupTable() {
    this.emit('cleanupTable', +1);
  }
}

module.exports = {
  Restaurant,
};
