const {createReadStream} = require('fs');

const openFileStream = createReadStream('package.json');
console.log(openFileStream);