// const {readFile} = require('fs').promises;
//
// (async () => {
//   console.log(await readFile('./index.js'))
// })();

const buff = Buffer.alloc(20);

buff.write('Hello World!', 'utf8')

console.log(buff);