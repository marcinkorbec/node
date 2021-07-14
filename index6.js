console.log('Boil Water');

setTimeout(() => {
  console.log('water is ready');
},1000);

console.log('Throw bag of tea into water...');

setTimeout(() => {
  console.log('Tea is ready');
  setTimeout(() => {
    console.log('You can drink a tea!');
  }, 500)
}, 1000);