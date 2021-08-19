/*    MODUŁ FS
* Jednym z wbudowanych w Node.js modułów jest fs. Ta krótka nazwa pochodzi od angielskiego file system. Jak sama nazwa wskazuje
* posłuży nam on do operacji na plikach. Dokładnie tego sie dzisiaj nauczymy - będziemy odczytywać, zapisywać i sprawdzać
* piki na dysku*/

/*  ODCZYT PLIKU
* Odczyt pliku odbywa się za pomocą asynchrnocznej funckji fs.readfile('nazwa pliku, opcje, funkcja callback).*/

const {readFile} = require('fs');

readFile('./index.js', (error, data) => {
  if (error === null) {
    console.log(data);
  } else {
    console.log('Oh no!', error);
  }
})