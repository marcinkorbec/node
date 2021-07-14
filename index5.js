const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];

const totalSum = grades.reduce(function(a, b) { return a + b; }, 0);
const average = totalSum/grades.length;

console.log('Sum is: ' + totalSum);
console.log('Average is: ' + average);

//-------------------------------------------------------------------------------------------------------------------------------------
const evenCities = el => el.length % 2 === 0;
const upperCase = el => el.toUpperCase();
const print = el => console.log(el);

const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];

cities
  .filter(evenCities)
  .map(upperCase)
  .forEach(print);




