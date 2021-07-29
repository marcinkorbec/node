class Calculator {
  constructor(a, b) {
    this.a = a;
    this.b = b;
    if (Number.isNaN(a) || Number.isNaN(b)) {
      try {
        alert('Przynajmniej jedna z wartości nie jest liczbą!');
      } finally {
        alert('Koniec programu!');
      }
    } else if (a==='' || b==='') {
      try {
        alert('Nie wpisałeś liczby!')
      } finally {
        alert('Koniec programu!')
      }
    }
  }

  add() {
    return this.items = this.a + this.b;
  }

  substract(a, b) {
     return this.items = this.a - this.b;
  }

  divide(a , b) {
    if (b === 0){
      try{
        alert('Próbujesz podzielić przez 0!');
      } finally {
        alert('Koniec programu!')
      }
    }
    return this.items = this.a / this.b;
  }

  multiply(a, b) {
    return this.items = this.a * this.b;
  }
}

const a =