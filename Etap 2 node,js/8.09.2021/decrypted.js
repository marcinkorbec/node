const {readFile, writeFile } = require('fs').promises;
const {decryptBinary, hash} = require('./cipher');
const {ENCRYPTED_SALT} = require('./constants');

const [,,fileName, pwd] = process.argv;

(async () => {
  const json = await readFile(fileName, 'utf8')
  const encrypted = JSON.parse(json);
  const decrypted = await decryptBinary(encrypted.encrypted, pwd, ENCRYPTED_SALT, encrypted.iv);
  await writeFile(fileName, decrypted, 'binary');
  console.log('File is succesful decrypted!')
})();