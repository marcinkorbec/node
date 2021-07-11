// class Person {
//   constructor(name) {
//     this.name = name;
//   }
//
//   sayHello() {
//     console.log('Hello!');
//   }
// };
//
// const alice = new Person();
// alice.sayHello();
// console.log(typeof Person);

//------------------------------------------------------------------------------------------

class Country {
  constructor(currency, language, currencyRatioToUsd) {
    this.currency = currency;
    this.language = language;
    this.currencyRatioToUsd = currencyRatioToUsd;
  }
  convertMoney(valueInLocalCurrency) {
    return valueInLocalCurrency / this.currencyRatioToUsd;
  }
}

const poland = new Country('PLN', 'Polish', 4);
const souvenirInPln = 50;
const souvenirInUsd = poland.convertMoney(souvenirInPln);

console.log(souvenirInUsd);