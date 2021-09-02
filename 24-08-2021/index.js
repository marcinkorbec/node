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

const {basename} = require('path');

console.log(basename(__filename));