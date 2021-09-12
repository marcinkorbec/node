const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;


(async () => {
  const [,, inputFile, outputFile, pwd] = process.argv;
  await pipeline (
    createReadStream(inputFile),
    //szyfrowanie
    createWriteStream(outputFile),
  );

  console.log('Done!');
})();