// PACZKI EKOSYSTEMU NODE.JS

//  Alternatywa dla NPM - Yarn

//  Po co?
//   - prędkość
//   - jeszcze szybsze komendy.

// W przeciwnieństwie do npm, Yarn nie jest automatycznie zainstalowany. Można go pobrać jako instalator,
// ale od niedawna można go zainstaować npm-em :)
// npm install --global yarn

//Komendy yarn
//yarn add (...)
//yarn add cośtam@verion
//yarn remove (...)

// Śłedzenie plików z chokidar
// - można reagować na zmiany w kodzie nawet w zewnętrznych usługach.
// - możesz reagować na pliki wysyłane przez klientów np. za pomocą ftp na lokalny serwer.
// - Możesz stworzyć narzędzie logujące zmiany w systemie.

//---------------------------------------------------------------------------------------------------------

const {normalize, resolve} = require('path');
const {watch} = require('chokidar');
const {readFile} = require('fs');

function safeJoin(base, target){
  const targetPatch = '.' + normalize('/' + target);
  return resolve (base, targetPatch);
}

// jeja raz dwa trzy czte
const userPath = safeJoin(__dirname,  process.argv[2] ? process.argv[2] : '.');

console.log('Starting watch: ', resolve(userPath));

watch(`${userPath}/**/*.js`, {
  ignoreInitial: true,
  awaitWriteFinish: true,
})
  .on('add', path => console.log(`File ${path} has been added.`))
  .on('unlink', path => console.log(`File ${path} has been removed.`))
  .on('change', path => console.log(
    `File ${path} has been changed ${readFile(path, 'utf8', (error, data) => {
      if (error) {
        console.log('Oh no', error);
      } else {
        console.log(data);
      }
    })}.`
  ))
