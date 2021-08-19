/*    MODUŁ FS
* Jednym z wbudowanych w Node.js modułów jest fs. Ta krótka nazwa pochodzi od angielskiego file system. Jak sama nazwa wskazuje
* posłuży nam on do operacji na plikach. Dokładnie tego sie dzisiaj nauczymy - będziemy odczytywać, zapisywać i sprawdzać
* piki na dysku*/

/*  ODCZYT PLIKU
* Odczyt pliku odbywa się za pomocą asynchrnocznej funckji fs.readfile('nazwa pliku, opcje, funkcja callback).*/

// const {readFile} = require('fs');
//
// readFile('./index.js', (error, data) => {
//   if (error === null) {
//     console.log(data);
//   } else {
//     console.log('Oh no!', error);
//   }
// })

// const {readFile} = require('fs').promises;
//
// (async () => {
//   const data = await readFile('./index.js', {
//     encoding: 'utf8',
//   })
//   console.log(data);
// })();

//ZAPIS PLIKÓW

// const {writeFile, readFile} = require('fs').promises;
// const FILE_NAME = './data/hello.txt';
//
// (async () => {
//   try {
//     const numberFromFile = Number(await readFile(FILE_NAME, 'utf8'));
//     console.log(numberFromFile)
//     await writeFile(FILE_NAME, (numberFromFile * 2).toString(), 'utf8');
//   } catch(error) {
//     console.log('oh no', error);
//   }
// })();

const {writeFile, readFile} = require('fs').promises;
const FILE_NAME = './data/hello.txt';

// readFile(FILE_NAME, 'utf8', (error, data) => {
//   if (error) {
//     console.log('Oh no', error);
//   } else {
//     const numberFromFile = Number(data);
//     appemFile(FILE_NAME, `\n${NumberFromFile * 2}`, 'utf8', error => {
//       if (error) {
//         console.log('Oh no', error);
//       } else {
//         console.log('File is saved');
//       }
//     })
//   }
// })