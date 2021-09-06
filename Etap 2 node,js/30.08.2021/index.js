const { exec } = require('child_process');

exec('node test.js', (error, stdout, stderr) => {
  console.log('stdout', stdout);
  console.log('stderr', stderr);
})