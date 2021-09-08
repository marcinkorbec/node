const {readFile, writeFile} = require('fs').promises;
const {encryptText} = require('./cipher');
const {SALT} = require('./constants');


const [,,fileName, pwd] = process.argv; //destrukturyzacja tablicy

(async () => {
  const content = await readFile(fileName, 'utf8');
  const encrypted = await encryptText(content, pwd, SALT);
  await writeFile(fileName, JSON.stringify(encrypted), 'utf8');
  console.log('Done.');
})();