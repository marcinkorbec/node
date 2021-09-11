const {createReadStream, createWriteStream} = require('fs');
const {pipeline} = require('stream'). promises;
const {createGzip} = require('zlib');

(async () => {
  await pipeline(
    createReadStream()
  );
})();