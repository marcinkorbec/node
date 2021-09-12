const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream').promises;

const openFileStream = createReadStream('package.json');
const writeFileStream = createWriteStream('encrypted.json');

(async () => {
  const openFileStream = createReadStream('package.json');
  const writeFileStream = createWriteStream('encrypted.json');
  await pipeline (
    openFileStream,
    writeFileStream,
  );

  console.log('Done!');
})();