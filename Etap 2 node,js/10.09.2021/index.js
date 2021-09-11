const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream'). promises;
const {createGzip} = require('zlib');

(async () => {
  await pipeline(
    createReadStream('picture.png'),
    createGzip(),
    createWriteStream('picture2.png'),
  );
  console.log('Done!');
})();

