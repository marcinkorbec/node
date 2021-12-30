const { basename, dirname, extname } = require('path');

const userPath = process.argv[2];

console.log('dirname', dirname(userPath));
console.log('basename', basename(userPath))