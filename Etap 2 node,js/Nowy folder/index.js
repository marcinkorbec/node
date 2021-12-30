const { normalize, join } = require('path');
const userPath = normalize(join(__dirname, process.argv[2]));
console.log(userPath);


