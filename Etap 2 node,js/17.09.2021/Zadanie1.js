const http = require('http');

let counter = 0;

http.createServer( (req, res) => {
  counter = counter+= 1;
  console.log(counter);
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end(`<meta charset="UTF-8"><h1>Witaj na stronie stworzonej w Node.js. Ilość Twoich odwiedzin to ${counter} razy</h1>`)


}).listen(3000, '127.0.0.1');