const {readFile, writeFile } = require('fs').promises;
const {decryptText} = require('cipher.js');
const [,,fileName, pwd] = process.argv;

(async () => {
  const json = await readFile(fileName, 'utf8')
  const encrypted = JSON.parse(json);
  console.log(encrypted);
  const decrypted = await decryptText(encrypted.encrypted, pwd, )
})();