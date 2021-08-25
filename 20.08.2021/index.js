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

// const {readdir, readFile, stat} = require('fs').promises;
//
// async function readFileAndDirectories() {
//   const fileNames = await readdir('.', {
//     withFileTypes: true,
//   });
//   console.log(fileNames)
// }
//
// readFileAndDirectories();

//---------------------------------------------------------------------------------------------------
//Tego nie stosować bo w dokumentacji jest depreciated i że zaraz będzie wycofane i dlatego nie działa
// const {exists} = require('fs').promises;
// const FILE_NAME =  './data/hello-world.txt';
//
// (async () => {
//   const fileExist = await exists(FILE_NAME);
//   if (!fileExist) {
//     console.log('This is not available file.')
//   }
// })();

//-----------------------------------------------------------------------------------------------------
// Tego nie zalecają robić bo między 90 a 94 linijką na komputerze mogło coś się zmienić
// const {access readFile} = require('fs').promises;
// const FILE_NAME =  './data/hello-world.txt';
//
// (async () => {
//   try {
//     await access(FILE_NAME, W_OK);
//   } catch(err) {
//     console.log('Wystąpił błąd, nie ma takiego pliku.')
//   }
//   readFile(FILE_NAME);
// })();

//-------------------------------------------------------------------------------------------------------

const {readFile} = require('fs').promises;
const FILE_NAME = './data/hello.txt';

(async () => {
  try {
    const result = await readFile(FILE_NAME, 'utf8');
    console.log(result);
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.log('Plik nie istnieje');
    } else {
      console.log('Nieznany błąd wyskoczył.',error);
    }
  }
})();



