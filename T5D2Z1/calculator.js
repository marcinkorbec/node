class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
  }

  add(a, b) {
    this.items = a + b;
  }

  substract(a, b) {
    this.items = a - b;
  }

  divide(a , b) {
    this.items = a / b;
  }

  multiply(a, b) {
    this.items = a * b;
  }
}