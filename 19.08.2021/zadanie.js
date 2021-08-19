const {writeFile, readFile, appendFile} = require('fs').promises;
const FILE_NAME = './data/hello.txt';

(async () => {
  try {
    const numberFromFile = Number(await readFile(FILE_NAME, 'utf8'));
    console.log(numberFromFile)
    await appendFile(FILE_NAME, `\n${(numberFromFile * 2).toString()}`, 'utf8');
  } catch(error) {
    console.log('oh no', error);
  }
})();

