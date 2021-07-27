class Basket {
  constructor() {
    this.items = this.loadFromLocalStorage();
  }

  clear() {
    this.items.length = 0;
    //this.items.splice(0);
    //this.items = [];
    this.saveToLocalStorage();
  }

  add(item) {
    this.items.push(item);
    this.saveToLocalStorage()
  }

  getTotalValue() {
    return this.items.reduce((prev, product) => prev + product.price, 0);
  }

  getBasketSummary() {
    return this.items
      .map((product, i) => {
        return {
          id: i + 1,
          text: `${i + 1} - ${product.name} - ${product.price.toFixed(2)}zł`,
        }
      })
  }

  remove(no) {
    this.items.splice(no - 1, 1);
    this.saveToLocalStorage();
  }

  saveToLocalStorage() {
    localStorage.setItem('basket-items', JSON.stringify(this.items))
  }

  loadFromLocalStorage() {
    const jsonItem = localStorage.getItem('basket-items');
    if (jsonItem === null) {
      return []
    } else {
      return JSON.parse(jsonItem);
    }
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


