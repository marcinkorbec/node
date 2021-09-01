const util = require('util');
const exec = util.promisify(require('child_process').exec);

exec('ping 8.8.8.8', (error, stdout, stderr) => {
  console.log({error, stdout, stderr});
})