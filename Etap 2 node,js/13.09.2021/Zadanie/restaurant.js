const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  constructor() {
    super();
  }

  open() {
    this.emit('open', 'Prosimy mieć maseczki.');
  }

  close() {
    this.emit('close', 'Możecie już zdjąć maseczki, bo one i tak nic nie dają :D ');
  }

  reserveTable() {
    this.emit('tableCount', 'Stolik został zarezerwowany. ', -1);
  }

  cancelTableReservation() {
    this.emit('tableCount','Odwołano rezerwację na stolik. ', +1);
  }

  takeTableWithoutReservation() {
    this.emit('tableCount','Ktoś wziął stolik bez rezerwacji. ', -1);
  }

  markTableAsBroken() {
    this.emit('tableCount', 'Stolik się popsuł, odpadła noga :/ . ' -1);
  }

  cleanupTable() {
    this.emit('tableCount', 'Ktoś skończył jeść, czyścimy stolik i wraca do użytku. ', +1);
  }
}

module.exports = {
  Restaurant,
};
