// const {createReadStream, createWriteStream} = require('fs');
// const {pipeline} = require('stream'). promises;
// const {createGzip} = require('zlib');
//
// (async () => {
//   await pipeline(
//     createReadStream('picture.png'),
//     createGzip(),
//     createWriteStream('picture2.png'),
//   );
//   console.log('Done!');
// })();

const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream'). promises;
const {createGzip} = require('zlib');

(async () => {
  await pipeline(
    createReadStream('picture2.png'),
    createGzip(),
    createWriteStream('picture3.png'),
  );
  console.log('Done!');
})();