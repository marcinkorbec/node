{
  //Callbacki w stylu Node (error, dane)
  // const {readFile} = require('fs');
  // //console.log('Hello World');
  //
  // readFile('./index.js', 'utf8',(err, data) => {
  //   //console.log(data);
  // })
  //
  // //console.log('Koniec programu.')
}

{
  // const {readFile} = require('fs');
  // //console.log('Hello World');
  //
  // readFile('./indexwe.js', 'utf8',(error, data) => {
  //   if (error === null) {
  //     //console.log(data);
  //   } else {
  //     //console.log('Oh no!', error);
  //   }
  // })

  //console.log('Koniec programu.')
}

//PRZEROBIENIE CALLBACKA W STYLU NODOWYM NA ZWYKŁEGO PROMISA

{
  {
    // const {readFile} = require('fs');
    // const {promisify} = require('util');
    // const readFilePromised = promisify(readFile);
    // //console.log('Hello World');
    //
    // readFilePromised('./index.js', 'utf8')
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(error => {
    //     console.log('Oh no', error);
    //   });
    //
    // //console.log('Koniec programu.')
  }
  {
    // const {readFile} = require('fs');
    // const {promisify} = require('util');
    // const readFilePromised = promisify(readFile);
    //
    // console.log('Hello World');
    //
    // (async () => {
    //   const data = await readFilePromised('./index12.js', 'utf8',);
    //   console.log(data);
    // })();
    //
    // console.log('Koniec programu.')
  }
  {
    // const {readFile} = require('fs');
    // const {promisify} = require('util');
    //
    // console.log('Hello World');
    //
    // (async () => {
    //   try {
    //     const data = await promisify(readFile)('./index.js', 'utf8',);
    //     console.log(data);
    //   } catch (err) {
    //     console.log('oh no kurwa', err);
    //   }
    // })();
    //
    // console.log('Koniec programu.')
  }
  {
    const {readFile} = require('fs').promises;


    console.log('Hello World');

    (async () => {
      try {
        const data = await readFile('./index.js', 'utf8',);
        console.log(data);
      } catch (err) {
        console.log('oh no kurwa', err);
      }
    })();

    console.log('Koniec programu.')
  }

}