const grades = [3, 4, 5, 6, 3, 4, 2, 5, 6];

const totalSum = grades
  .reduce(function(a, b) { return a + b; }, 0);

console.log('Sum is: ' + totalSum);

const average = totalSum/grades.length

console.log('Average is: ' + average);
