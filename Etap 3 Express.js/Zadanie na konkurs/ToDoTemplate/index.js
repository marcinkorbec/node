const express = require('express');

const app = express();

console.log('Program działa');

app.use(express.json());
app.use(express.static('public'));

app.listen(3000, 'localhost');