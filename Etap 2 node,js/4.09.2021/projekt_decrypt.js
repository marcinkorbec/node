const {readFile, writeFile } = require('fs').promises;
const {decryptText} = require('cipher.js');
const [,,fileName, pwd] = process.argv;

(async () => {
  const json = await readFile
})();