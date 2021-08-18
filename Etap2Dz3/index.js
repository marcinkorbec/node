{
  //Callbacki w stylu Node (error, dane)
  const {readFile} = require('fs');
  console.log('Hello World');

  readFile('./index.js', 'utf8',(err, data) => {
    console.log(data);
  })

  console.log('Koniec programu.')
}