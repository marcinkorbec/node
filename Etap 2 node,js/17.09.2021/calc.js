function calc(operation, a, b) {
  // if (operation === 'multiply') {
  //   return a * b;
  // } else if (operation === 'add') {
  //   return a + b;
  // } else if (operation === 'substract') {
  //   return a - b;
  // } else if (operation === 'divide') {
  //   return a / b;
  // }

//ALBO: ---------------------------------------------

//   switch (operation) {
//     case 'add':
//       return a + b;
//     case 'multiply':
//       return a * b;
//     case 'substract':
//       return a - b;
//     case 'divide':
//       return a / b;
//   }
// }

//ALBO: --------------------------------------------

  let result;

  switch (operation) {
    case 'add':
      result= a + b;
      break;
    case 'multiply':
      result= a * b;
      break;
    case 'substract':
      result= a - b;
      break;
    case 'divide':
      result= a / b;
      break;
    default:
      result = 'Operation is not supported!';
      break;
  }
  return result;
}

module.exports = {
  calc,
}