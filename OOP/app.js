class Basket {
  constructor() {
    this.items = [];
    this.basketValue = 0;
  }
  add(item) {
    this.items.push(item);
  }
  getTotalValue() {
    return this.items.reduce((prev, curr) => prev + curr.price, 0);
  }

  //pętla
//   getTotalValue() {
//     let sum = 0;
//     for (const product of this.items) {
//       sum += product.price;
//     }
//   }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price =productPrice;
  }
  setNewPrice(newPrice) {
    this.price = newPrice;
  }
}


const shopBasket = new Basket();

const oranges = new Product('Pomarańcze LUZ', 7.55);
const cucumbers = new Product('Ogórki LUZ',4.99);

shopBasket.add(cucumbers);
shopBasket.add(cucumbers);

console.log(shopBasket);