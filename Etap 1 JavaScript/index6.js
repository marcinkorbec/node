// console.log('Boil Water');
//
// setTimeout(() => {
//   console.log('water is ready');
// },1000);
//
// console.log('Throw bag of tea into water...');
//
// setTimeout(() => {
//   console.log('Tea is ready');
//   setTimeout(() => {
//     console.log('You can drink a tea!');
//   }, 500)
// }, 1000);

const {setTimeout} = require('timers/promises');
// const intervalId = setInterval( () => console.log('Cyk!'), 100);
//
// (async () => {
//   console.log('Hi');
//   await setTimeout(1000);
//   console.log('Hello');
//
//   clearInterval((intervalId));
// })();


async function brewTea() {
  console.log('Brewing tea...');
  await setTimeout(1000);
  console.log('Tea is ready!');
}

async function orderKeyboard() {
  console.log('Ordering and waiting for package...');
  await setTimeout(2000);
  console.log('Keyboard has arrived!');
}

(async () => {
  await Promise.all([brewTea(), orderKeyboard()])
  console.log('Finished!');
})();














