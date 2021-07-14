// const ar = [];
// ar.push(1);
// console.log(ar);
//
// ar.push(2, 3);
// console.log(ar);
//
// ar.forEach((element, index) => {
//   console.log (element);
// });
//
// ar.forEach(num => console.log(num));

const array = [1,2,3];

array.forEach((element, index) => {
  console.log (element);
});

//to samo można uzyskać za pomocą zwykłej pętli for:

for (let i = 0; i<array.length; i++) {
  const element = array[i];
  console.log(element);
};

array.forEach((element, index, array) => {
  array[index] = element + 2;
});

console.log (array);

//----------------------------------------------------------------

const numbers = [1, 2, 3];