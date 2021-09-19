const {createServer} = require('http');

const server = createServer();

server.on('request', (req, res) => {
  const [, operation, a, b] = req.url.split('/');
  console.log(operation, a, b);
  if (req.url === '/') {
    res.writeHead(200, {
      'conetent-type': 'text/plain',
    });
  }
});

server.listen(3000, '127.0.0.1');