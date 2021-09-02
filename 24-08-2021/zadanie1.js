const {join ,basename, dirname, extname} = require('path');

const plikTxt = 'plik.txt'; //process.argv[2];
const testBmp = 'test.bmp'; //process.arv[3];

console.log(join(__dirname, plikTxt));
console.log('basename', basename(__dirname));
console.log('basename', basename(plikTxt));
console.log('extname', extname(plikTxt));

console.log(join(__dirname, plikTxt));
console.log('basename', basename(__dirname));
console.log('basename', basename(testBmp));
console.log('extname', extname(testBmp));

