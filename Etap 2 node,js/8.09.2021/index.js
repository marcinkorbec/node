// const {readFile} = require('fs').promises;
//
// (async () => {
//   console.log(await readFile('./index.js'))
// })();

const buff = Buffer.alloc(40);

const write = buff.write('Zażółć gęślą jaźń!', 'utf8')

// console.log(buff);
// console.log(buff.toString('utf8'));
// console.log(buff.toString('hex'));
// console.log(write);

Buffer.byteLength('Zażółć gęślą jaźń!')