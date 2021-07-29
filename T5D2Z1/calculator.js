const btnAdd = document.querySelector('.add');
const btnSubstract = document.querySelector('.subtract');
const btnDivide = document.querySelector('.divide');
const btnMultiply = document.querySelector('.multiply');
const result = document.querySelector('.result');

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




btnAdd.addEventListener('click', () => {
  result.innerText = '';
  const a = Number(document.querySelector('.a').value);
  const b = Number(document.querySelector('.b').value);
  const calc = new Calculator(a,b);
  calc.add();
  const newText = document.createElement('p');
  newText.innerText = `Suma = ${calc.items}`;
  result.appendChild(newText);
});

btnSubstract.addEventListener('click', () => {
  result.innerText = '';
  const a = Number(document.querySelector('.a').value);
  const b = Number(document.querySelector('.b').value);
  const calc = new Calculator(a,b);
  calc.substract();
  const newText = document.createElement('p');
  newText.innerText = `Różnica = ${calc.items}`;
  result.appendChild(newText);
});

btnDivide.addEventListener('click', () => {
  result.innerText = '';
  const a = Number(document.querySelector('.a').value);
  const b = Number(document.querySelector('.b').value);
  const calc = new Calculator(a,b);
  calc.divide();
  const newText = document.createElement('p');
  newText.innerText = `Dzielenie = ${calc.items}`;
  result.appendChild(newText);
});

btnMultiply.addEventListener('click', () => {
  result.innerText = '';
  const a = Number(document.querySelector('.a').value);
  const b = Number(document.querySelector('.b').value);
  const calc = new Calculator(a,b);
  calc.multiply();
  const newText = document.createElement('p');
  newText.innerText = `Mnożenie = ${calc.items}`;
  result.appendChild(newText);
});


