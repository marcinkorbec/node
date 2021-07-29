const btnAdd = document.querySelector('.add');
const btnSubstract = document.querySelector('.add');
const btnDivide = document.querySelector('.add');
const btnMultiply = document.querySelector('.add');


class Calculator {
  constructor(a, b) {
    this.a = document.querySelector('.a').value;
    this.b = document.querySelector('.b').value;
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

  substract() {
     return this.items = this.a - this.b;
  }

  divide() {
    if (b === 0){
      try{
        alert('Próbujesz podzielić przez 0!');
      } finally {
        alert('Koniec programu!')
      }
    }
    return this.items = this.a / this.b;
  }

  multiply() {
    return this.items = this.a * this.b;
  }
}

const calc = new Calculator(a,b);

btnAdd.addEventListener('submit', function(){

  console.log(a)
})