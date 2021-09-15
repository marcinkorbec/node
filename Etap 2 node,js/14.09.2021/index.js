// const {createServer} = require('http');
//
// const server = createServer();
// server.on('request', (req, res) => {
//   res.writeHead(200, {
//     'Content-type': 'text/html',
//   });
//   if(req.url === '/') {
//     res.end('<h1>Hello from Megakurs</h1>');
//   } else {
//     res.end('<h1>Not Found</h1>');
//   }
// });
//
// server.listen(3000, 'localhost');

//----------------------------------------------------------------------------------------------------------------------

const {createServer} = require('http');

const server = createServer();
server.on('request', (req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Hello from Megakurs</h1>');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
    });
    res.end('<h1>Not Found</h1>');
  }
});

server.listen(3000, 'localhost');