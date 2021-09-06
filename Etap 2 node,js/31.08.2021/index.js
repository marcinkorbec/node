// const { promisify } = require('util');
// const exec = promisify(require('child_process').exec);
//
// // exec('dir')
// //   .then(({stdout, stderr}) => {
// //     console.log(data.stdout);
// //   })
//
// (async () => {
//   try {
//     //const ip = process.argv[2];
//     const {stdout} = await exec(`npm i`, {
//       timeout: 1000 * 60 * 60,
//     }
//   );
//     console.log(stdout);
//
//   } catch (e) {
//     console.error('Oh no!');
//   }
// })();

// WYRAŻENIA REGULARNE

// const ip = '8.8.8.8';
// const safeIp = ip.replace(/[^0-9.]/g);
// console.log(safeIp);


//ZADANIE 1
// const { promisify } = require('util');
// const exec = promisify(require('child_process').exec);
//
// const choice = process.argv[2];
//
// (async () => {
//   if (choice === 'Kalkulator') {
//     const {stdout} = await exec('calc');
//   } else if (choice === 'Paint') {
//     const {stdout} = await exec('mspaint');
//   } else {
//     console.error('Wrong way oh no!')
//   }
// })();

//ZADANIE 2

const {promisify} = require('util');
const exec = promisify(require('child_process').exec);
const {normalize} = require('path');

const command = 'dir'; //'ls';

const dir = process.argv[2];
const safeDir = normalize(dir);
console.log(safeDir);

(async () => {
  try {
    const {stdout} = await exec(command, {
      cwd: safeDir,
    });
    console.log(stdout);
  } catch(e) {
    console.error('Error:\n'+ e);
  }

})();