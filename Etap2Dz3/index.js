{
  //Callbacki w stylu Node (error, dane)
  const {readFile} = require('fs');
  //console.log('Hello World');

  readFile('./index.js', 'utf8',(err, data) => {
    //console.log(data);
  })

  //console.log('Koniec programu.')
}

{
  const {readFile} = require('fs');
  //console.log('Hello World');

  readFile('./indexwe.js', 'utf8',(error, data) => {
    if (error === null) {
      //console.log(data);
    } else {
      //console.log('Oh no!', error);
    }
  })

  //console.log('Koniec programu.')
}

//PRZEROBIENIE CALLBACKA W STYLU NODOWYM NA ZWYKŁEGO PROMISA

{
  const {readFile} = require('fs');
  const {promisify} = require('util');

  //console.log('Hello World');

  const readFilePromised = promisify(readfile);
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log('Oh no', error);
    });

  //console.log('Koniec programu.')
}