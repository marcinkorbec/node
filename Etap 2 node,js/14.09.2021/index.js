const {createServer} = require('http');

const server = createServer();
server.on('request', (req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/html',
  });
  res.end('<h1>Hello from Megakurs</h1>');
});

server.listen(3000, 'localhost');