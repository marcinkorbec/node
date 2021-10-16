const numberAInput = document.querySelector('#num1');
const numberBInput = document.querySelector('#num2');
const result = document.querySelector('#result');
const form = document.querySelector('form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const numberA = Number(numberAInput.value);
  const numberB = Number(numberBInput.value);

  result.textContent = 'Loading...';
  result.style.border = 'none';

  const res = await fetch('/calc/check', {
    method: 'POST',
    body: JSON.stringify({
      numberA,
      numberB,
    }),
    headers: {
      'Content-Type': 'application/json',
    }
  });
  const data = await res.json();


  if (data.divider) {
    result.innerText = 'Numer B jest dzielnikiem numeru A.';
    result.style.border = '3px solid lime';
  } else {
    result.innerText = 'Numer B nie jest dzielnikiem numeru A.';
    result.style.border = '3px solid red';
  };

});