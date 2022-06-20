function sum(a: number, b: number):number {
  return a + b;
}

function getHello(name: string, surname:string): string {
  return `Hello! ${name}, ${surname}`;
}

function  formatPrice(price: number, currency:string): string {
  return price.toFixed(2) + currency;
}