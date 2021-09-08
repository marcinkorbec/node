const {readFile, writeFile } = require('fs').promises;
const {decryptText} = require('./cipher');
const {SALT} = require('./constants');
const [,,fileName, pwd] = process.argv;

(async () => {
  const json = await readFile(fileName, 'utf8')
  const encrypted = JSON.parse(json);
  const decrypted = await decryptText(encrypted.encrypted, pwd, SALT, encrypted.iv);
  await writeFile(fileName, decrypted, 'utf8');
})();