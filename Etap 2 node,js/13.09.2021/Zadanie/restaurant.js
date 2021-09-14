const { EventEmitter } = require('events');
//const { tablesCount } = require('./index')

class Restaurant extends EventEmitter {
  constructor() {
    super();
  }

  open() {
    this.emit('restaurantIsOpen');
    //console.log(`Restauracje otwarto. Dostepnych stolików:${tablesCount}`)
  }

  close() {
    this.emit('restaurantIsClosed');
    //console.log(`Zamknięcie restauracji. Dostepnych stolików:${tablesCount}`)
  }

  reserveTable() {
    this.emit('tableCount', -1);
    //console.log(`Stolik został zarezerowany na teraz. Dostepnych stolików:${tablesCount}`)
  }

  cancelTableReservation() {
    this.emit('tableCount', +1);
    //console.log(`Odwołano rezerwację na stolik. Dostepnych stolików:${tablesCount}`)
  }

  takeTableWithoutReservation() {
    this.emit('tableCount', -1);
    //console.log(`Ktoś wziął stolik bez rezerwacji. Dostepnych stolików:${tablesCount}`)
  }

  markTableAsBroken() {
    this.emit('tableCount', -1);
    //console.log(`Stolik się popsuł, odpadła noga :/ . Dostepnych stolików:${tablesCount}`)
  }

  cleanupTable() {
    this.emit('tableCount', +1);
    //console.log(`Ktoś skończył jeść, czyścimy stolik i wraca do użytku. Dostepnych stolików:${tablesCount}`)
  }
}

module.exports = {
  Restaurant,
};

// const { EventEmitter } = require('events');
//
// class Restaurant extends EventEmitter {
//   /**
//    * Otwarcie restauracji.
//    */
//   open() {
//     this.emit('restaurantIsOpen');
//   }
//
//   /**
//    * Zamknięcie restauracji.
//    */
//   close() {
//     this.emit('restaurantIsClosed');
//   }
//
//   /**
//    * Stolik został zarezerowany na teraz.
//    * Traktuj to jako po prostu 1 stolik mniej.
//    */
//   reserveTable() {
//     this.emit('tableCount', -1);
//   }
//
//   /**
//    * Odwołano rezerwację na stolik.
//    * Traktuj to jako po prostu 1 stolik więcej.
//    */
//   cancelTableReservation() {
//     this.emit('tableCount', 1);
//   }
//
//   /**
//    * Ktoś wziął stolik bez rezerwacji.
//    */
//   takeTableWithoutReservation() {
//     this.emit('tableCount', -1);
//   }
//
//   /**
//    * Stolik się popsuł, odpadła noga :/
//    */
//   markTableAsBroken() {
//     this.emit('tableCount', -1);
//   }
//
//   /**
//    * Ktoś skończył jeść, czyścimy stolik i wraca do użytku.
//    */
//   cleanupTable() {
//     this.emit('tableCount', 1);
//   }
// }
//
// module.exports = {
//   Restaurant,
// };