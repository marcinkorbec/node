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

  switch (operation) {
    case 'add':
      return a + b;
    case 'multiply':
      return a * b;
    case 'substract':
      return a - b;
    case 'divide':
      return a / b;
  }
}

module.exports = {
  calc,
}