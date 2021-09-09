const {readFile, writeFile} = require('fs').promises;
const {encryptBinary, decryptBinary } = require('./cipher');
const {ENCRYPTED_SALT} = require('./constants');

const [,,fileName, pwd] = process.argv;

(async ()=> {
  const content = await readFile(fileName);
  const encrypted = await encryptBinary(content, pwd, ENCRYPTED_SALT);
  await writeFile(fileName, JSON.stringify(encrypted), 'utf8');
  console.log('File is encrypted!')
})();

