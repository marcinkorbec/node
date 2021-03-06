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
//Tego nie stosowa?? bo w dokumentacji jest depreciated i ??e zaraz b??dzie wycofane i dlatego nie dzia??a
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
// Tego nie zalecaj?? robi?? bo mi??dzy 90 a 94 linijk?? na komputerze mog??o co?? si?? zmieni??
// const {access readFile} = require('fs').promises;
// const FILE_NAME =  './data/hello-world.txt';
//
// (async () => {
//   try {
//     await access(FILE_NAME, W_OK);
//   } catch(err) {
//     console.log('Wyst??pi?? b????d, nie ma takiego pliku.')
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
      console.log('Nieznany b????d wyskoczy??.',error);
    }
  }
})();



