const {createServer} = require('http');
const port = 3000;

const server = createServer();

server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/html',
  });
  res.end('<h1>Hello From Http module!</h1>')
});

server.listen(port, 'localhost');