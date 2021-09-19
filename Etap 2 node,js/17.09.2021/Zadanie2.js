const {createServer} = require('http');
const {calc} = require('/calc')
const server = createServer();

server.on('request', (req, res) => {
  const [, operation, a, b] = req.url.split('/');

  const result = calc(operation, a, b);

  }
  if (req.url === '/') {
    res.writeHead(200, {
      'conetent-type': 'text/plain',
    });
  }
});

server.listen(3000, '127.0.0.1');