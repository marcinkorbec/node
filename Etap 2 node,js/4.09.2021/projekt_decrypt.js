const {readFile, writeFile } = require('fs').promises;
const {decryptText, hash} = require('./cipher');
const {ENCRYPTED_SALT, HASH_SALT} = require('./constants');
const [,,fileName, pwd] = process.argv;

(async () => {
  const json = await readFile(fileName, 'utf8')
  const encrypted = JSON.parse(json);
  const decrypted = await decryptText(encrypted.encrypted, pwd, ENCRYPTED_SALT, encrypted.iv);
  const decryptedHash = hash(decrypted, HASH_SALT);

  if(decryptedHash === encrypted.hash) {
    await writeFile(fileName, decrypted, 'utf8');
  } else {
    console.error('File is not original');
  }


})();