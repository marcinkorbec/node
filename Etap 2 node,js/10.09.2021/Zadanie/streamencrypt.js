const {pipeline} = require('stream').promises;
const { promisify } = require('util');
const scrypt = promisify(require('crypto').scrypt);
const {createReadStream, createWriteStream} = require('fs');
const {createCipher} = require('crypto'); //A w drugim createDecipher
const {ENCRYPTED_SALT} = require('./constants');


(async () => {
  const [,, inputFile, outputFile, pwd] = process.argv;
  const key = await scrypt(pwd, ENCRYPTED_SALT, 24);
  const algorithm = 'aes-192-cbc';

  await pipeline (
    createReadStream(inputFile),
    createCipher(algorithm, key),
    createWriteStream(outputFile),
  );

  console.log('Done!');
})();