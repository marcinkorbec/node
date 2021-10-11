const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    const {url, originalUrl, path};
    console.log({url, originalUrl, path});
});

app.listen(port);



// res.send('<h1>Hello from backend!</h1>')