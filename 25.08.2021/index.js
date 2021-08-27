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

const {watch} = require ('chokidar');

watch('.')
  .on('all', (event, patch) => {
    console.log(event, patch);
  })
