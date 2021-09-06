// const {readdir} = require('fs').promises;
//
// (async() => {
//
//   const subDir = process.argv[2];
//
//   const files = await readdir('./' + subDir);
//
//   console.log(files);
//
// })();
//----------------------------------------------------------------------------------------------------------------------
// const {} = require('path');
//
// console.log(__dirname); //pokazuje całą ścieżkę do pliku C:\Users\marci\OneDrive\Pulpit\udemy\megak\node\24-08-2021
// console.log(__filename); //pokazuje całą ścieżkę wraz z plikiem C:\Users\marci\OneDrive\Pulpit\udemy\megak\node\24-08-2021\index.js
//----------------------------------------------------------------------------------------------------------------------

// const {basename} = require('path');
// myDirPath = 'C:\\marci'; //marci
// console.log(basename(myDirPath));
//console.log(basename(__filename));
//----------------------------------------------------------------------------------------------------------------------

// const {join} = require('path');
//
// const fullPath = join(__dirname, process.argv[2]);
//
// console.log(fullPath);  //C:\Users\marci\OneDrive\Pulpit\udemy\megak\node\24-08-2021\data

//----------------------------------------------------------------------------------------------------------------------

// const {basename, dirname} = require('path');
//
// console.log('dirname', dirname(__dirname)); //dirname C:\Users\marci\OneDrive\Pulpit\udemy\megak\node
// console.log('basename', basename(__dirname)); //basename 24-08-2021

/*
* __filename = C:\Users\marci\OneDrive\Pulpit\udemy\megak\node\24-08-2021\index.js
* __dirname = C:\Users\marci\OneDrive\Pulpit\udemy\megak\node\24-08-2021
* dirname(__dirname) = C:\Users\marci\OneDrive\Pulpit\udemy\megak
* */

//----------------------------------------------------------------------------------------------------------------------

// const {basename, dirname} = require('path');
//
// const userPath = process.argv[2];
//
// console.log('dirname', dirname(userPath)); //dirname .
// console.log('basename', basename(userPath)); //basename package.json

//----------------------------------------------------------------------------------------------------------------------

// const {basename, dirname, extname} = require('path');
//
// const userPath = process.argv[2];
//
// console.log('dirname', dirname(userPath)); //dirname .
// console.log('basename', basename(userPath)); //basename package.json
// console.log('extname', extname(userPath)); //extname .json

//----------------------------------------------------------------------------------------------------------------------

// const {normalize, join} = require('path');
//
// const userPath = join(__dirname, process.argv[2]);
//
// console.log(userPath);

//----------------------------------------------------------------------------------------------------------------------
const {normalize, join, resolve} = require('path');

function safeJoin(base, target) {
  const targetPath = '.' + normalize('/' + target)
  return resolve(base, targetPath);
}

const userPath = safeJoin(__dirname, process.argv[2]); // node index.js ../../../../../../../../../Windows
console.log(userPath); //C:\Users\marci\OneDrive\Pulpit\udemy\megak\node\24-08-2021\Windows

//-----------------------------------------------------------------------------------------------------------------------