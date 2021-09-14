const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  constructor() {
    super();
    this.iloscStolikow = this;
  }

  open() {
    this.emit(0 + this.iloscStolikow);
    console.log(`Restauracje otwarto. Dostepnych stolików:${this.iloscStolikow}`)
  }

  close() {
    this.emit(this.iloscStolikow - this.iloscStolikow);
    console.log(`Zamknięcie restauracji. Dostepnych stolików:${this.iloscStolikow}`)
  }

  reserveTable() {
    this.emit(this.iloscStolikow - 1);
    console.log(`Stolik został zarezerowany na teraz. Dostepnych stolików:${this.iloscStolikow}`)
  }

  cancelTableReservation() {
    this.emit(this.iloscStolikow + 1);
    console.log(`Odwołano rezerwację na stolik. Dostepnych stolików:${this.iloscStolikow}`)
  }

  takeTableWithoutReservation() {
    this.emit(this.iloscStolikow - 1);
    console.log(`Ktoś wziął stolik bez rezerwacji. Dostepnych stolików:${this.iloscStolikow}`)
  }

  markTableAsBroken() {
    this.emit(this.iloscStolikow - 1);
    console.log(`Stolik się popsuł, odpadła noga :/ . Dostepnych stolików:${this.iloscStolikow}`)
  }

  cleanupTable() {
    this.emit(this.iloscStolikow + 1);
    console.log(`Ktoś skończył jeść, czyścimy stolik i wraca do użytku. Dostepnych stolików:${this.iloscStolikow}`)
  }
}

module.exports = {
  Restaurant,
};