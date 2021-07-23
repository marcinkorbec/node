class Basket {
  constructor() {
    this.items = [];
  }
  add(item) {
    this.items.push(item);
  }
  getTotalValue() {
    return this.items.reduce((prev, product) => prev + product.price, 0);
  }

  showBasket() {
    this.items
      .map((product, i) => `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł`)
      .forEach(line => console.log(line));
  }

  remove(no) {
    this.items.splice(no - 1, 1)
  }
}

class Product {
  constructor(productName, productPrice) {
    this.name = productName;
    this.price = productPrice;
  }
  setNewPrice(newPrice) {
    this.price = newPrice;
  }
}


