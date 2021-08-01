const btnAdd = document.querySelector('.add');
const btnSubstract = document.querySelector('.subtract');
const btnDivide = document.querySelector('.divide');
const btnMultiply = document.querySelector('.multiply');
const result = document.querySelector('.result');

class Calculator {
  constructor(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
      throw Error('Pierwsza lub druga wartość nie jest liczbą!');
    } else if (a==='' || b==='') {
        throw Error('Nie wpisałeś liczby!');
    } else {
      this.a = a;
      this.b = b;
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

  // const a = Number(prompt('Wpisz pierwszą liczbę'));
  // const b = Number(prompt('Wpisz drugą liczbę'));
  // const calc = new Calculator(a,b);
  // calc.add();
  // console.log(calc.items);
  // calc.divide();
  // console.log(calc.items);
  // calc.multiply();
  // console.log(calc.items);
  // calc.substract();
  // console.log(calc.items);
  
    

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


