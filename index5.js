const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];

const totalSum = grades.reduce(function(a, b) { return a + b; }, 0);
const average = totalSum/grades.length;

console.log('Sum is: ' + totalSum);
console.log('Average is: ' + average);

//-------------------------------------------------------------------------------------------------------------------------------------

const cities = ['Wrocław', 'Poznań', 'Kraków', 'Warszawa', 'Katowice', 'Bytom', 'Jelenia Góra', 'Jastrzębie-Zdrój', 'Rabka-Zdrój'];

cities
  .filter((el => el.length % 2 === 0))
  .map(el => el.toUpperCase())
  .forEach(el => console.log(el));




