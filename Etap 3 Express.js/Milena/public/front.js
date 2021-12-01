const numberA = Number(numberAInput.value);
const numberB = Number(numberBInput.value)
console.log({ numberA, numberB })

const result = fetch('/calc/check', {
    method: 'POST',
    body: JSON.stringify({
        numberA,
        numberB,
    }),


    headers: {
        'Content-type': 'application/json'
    },
})

const data = await res.json();
console.log(data);
