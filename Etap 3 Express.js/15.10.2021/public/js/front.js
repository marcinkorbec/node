const numberAInput = document.querySelector('#num1');
const numberBInput = document.querySelector('#num2');
const form = document.querySelector('form');

form.addEventListener('submit', async event => {
  event.preventDefault();

  const numberA = Number(numberAInput.value);
  const numberB = Number(numberBInput.value);

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
  console.log(data);

});