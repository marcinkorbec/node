const express = require('express');
const {readFile, writeFile} = require('fs').promises;

const app = express();

app.use(express.json());
app.use(express.static('public'));

app.post('/book', (req, res) => {
  console.log(req.body);
})