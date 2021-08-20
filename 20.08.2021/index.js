// const {readdir} = require('fs').promises;
//
// async function readFileAndDirectories() {
//   const list = await readdir('.');
//   console.log(list);
// }
//
// readFileAndDirectories();

//------------------------------------------------------------------------------------------------------------

// const {readdir, readFile} = require('fs').promises;
//
// async function readFileAndDirectories() {
//   const fileNames = await readdir('./data');
//
//   for(const fileName of fileNames) {
//     console.log(fileName);
//     const fileContent = await readFile(`./data/${fileName}`, 'utf8');
//     console.log(fileContent);
//   }
// }
//
// readFileAndDirectories();

//------------------------------------------------------------------------------------------------------------

// const {readdir, readFile, stat} = require('fs').promises;
//
// async function readFileAndDirectories() {
//   const fileNames = await readdir('./data');
//
//   for(const fileName of fileNames) {
//     console.log(fileName);
//     const fileStat = await stat(`./data/${fileName}`);
//     console.log(fileStat.isFile());
//   }
// }
//
// readFileAndDirectories();

//-----------------------------------------------------------------------------------------------------

// const {readdir, readFile, stat} = require('fs').promises;
//
// async function readFileAndDirectories() {
//   const fileNames = await readdir('./data');
//
//   for(const fileName of fileNames) {
//     console.log(fileName);
//     const fileStat = await stat(`./data/${fileName}`);
//     console.log(fileStat.isFile());
//   }
// }
//
// readFileAndDirectories();

//----------------------------------------------------------------------------------------------------

const {readdir, readFile, stat} = require('fs').promises;

async function readFileAndDirectories() {
  const fileNames = await readdir('.', {
    withFileTypes: true,
  });
  console.log(fileNames)
}

readFileAndDirectories();