const {createReadStream, createWriteStream} = require('fs');

const openFileStream = createReadStream('package.json');
const writeFileStream = createWriteStream('encrypted.json);