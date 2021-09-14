const { EventEmitter } = require('events');

class Restaurant extends EventEmitter {
  constructor() {
    super();
    this.iloscStolikow = this;
  }
  /**
   * Otwarcie restauracji.
   */
  open() {
    this.emit(0 + this.iloscStolikow);
  }

  /**
   * Zamknięcie restauracji.
   */
  close() {
    this.emit(this.iloscStolikow - this.iloscStolikow);
  }

  /**
   * Stolik został zarezerowany na teraz.
   * Traktuj to jako po prostu 1 stolik mniej.
   */
  reserveTable() {
    this.emit(this.iloscStolikow - 1);
  }

  /**
   * Odwołano rezerwację na stolik.
   * Traktuj to jako po prostu 1 stolik więcej.
   */
  cancelTableReservation() {
    this.emit(this.iloscStolikow + 1);
  }

  /**
   * Ktoś wziął stolik bez rezerwacji.
   */
  takeTableWithoutReservation() {
    this.emit(this.iloscStolikow - 1);
  }

  /**
   * Stolik się popsuł, odpadła noga :/
   */
  markTableAsBroken() {
    this.emit(this.iloscStolikow - 1);
  }

  /**
   * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
   */
  cleanupTable() {
    this.emit(this.iloscStolikow + 1);
  }
}

module.exports = {
  Restaurant,
};