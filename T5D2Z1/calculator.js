const btnAdd = document.querySelector('.add');
const btnSubstract = document.querySelector('.subtract');
const btnDivide = document.querySelector('.divide');
const btnMultiply = document.querySelector('.multiply');


class Calculator {
  constructor(a, b) {
    this.a = Number(document.querySelector('.a').value);
    this.b = Number(document.querySelector('.b').value);
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

  add(a, b) {
    return this.items = this.a + this.b;
  }

  substract(a, b) {
     return this.items = this.a - this.b;
  }

  divide(a, b) {
    if (b === 0){
      try{
        alert('Próbujesz podzielić przez 0!');
      } finally {
        alert('Koniec programu!')
      }
    }
    return this.items = this.a / this.b;
  }

  multiply(a,b) {
    return this.items = this.a * this.b;
  }
}

function addToDiv(){
  document.createElement('p')
}

// function sum() {
//   const a =
//   const b = Number(document.querySelector('.b').value);
//   const calc = new Calculator(a,b);
//   calc.add();
//   console.log(calc)
//   calc.divide()
//   console.log(calc)
//   calc.multiply()
//   console.log(calc)
// }


btnAdd.addEventListener('click', add());

