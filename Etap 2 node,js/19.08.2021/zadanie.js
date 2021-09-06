const {readFile, appendFile} = require('fs').promises;
const FILE_NAME = './data/hello.txt';

(async () => {
  try {
    const numberFromFile = await readFile(FILE_NAME, 'utf8');
    const arr = [...numberFromFile.split('\n')];
    await appendFile(FILE_NAME, `\n${arr[arr.length-1]*2}`, 'utf8');
    console.log(arr);
  } catch(error) {
    console.log('oh no', error);
  }
})();

