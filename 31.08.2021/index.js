const { promisify } = require('util');
const exec = promisify(require('child_process').exec);

// exec('dir')
//   .then(({stdout, stderr}) => {
//     console.log(data.stdout);
//   })

(async () => {
  try {
    const ip = process.argv[2];
    const {stdout} = await exec(`ping ${ip}`);
    console.log(stdout);

  } catch (e) {
    console.error('Oh no!');
  }
})();