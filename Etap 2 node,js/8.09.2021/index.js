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

// console.log(Buffer.byteLength('Zażółć gęślą jaźń!'));
// console.log(Buffer.byteLength('a'));
// console.log(Buffer.byteLength('ń'));
// console.log(Buffer.byteLength('😍'));
// console.log(Buffer.byteLength('字'));
