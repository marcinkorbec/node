const {readFile, writeFile} = require('fs').promises;
const FILE_NAME = './data/input1.json';
const SUM_FILE = './data/sum.txt';

(async () => {
  const data = await readFile(FILE_NAME, {
    encoding: 'utf8',
  })
  const dataArray = JSON.parse(data);
  const sum = (dataArray.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
  })).toString();

  await (async () => {
    try {
      await writeFile(SUM_FILE, sum, 'utf8')
      console.log('Plik zapisano poprawnie!')
    } catch (error) {
      console.log('Nie udało się zapisać pliku!', error);
    }
  })();
})();