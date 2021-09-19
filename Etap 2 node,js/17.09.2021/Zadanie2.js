const {createServer} = require('http');

const server = createServer();

server.on('request', (req, res) => {
  console.log(req.url.split(''));

  if (req.url === '') {
    res.writeHead(200, {
      'conetent-type': 'text/plain',
    });
  }
});

server.listen(3000, '127.0.0.1');