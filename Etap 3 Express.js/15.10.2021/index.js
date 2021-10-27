const express = require('express');
const {calcRouter} = require('./routes/calc');
const app = express();

console.log('Program działa.')

app.use(express.json());
app.use(express.static('public'));
app.use('/calc', calcRouter);

app.listen(8000);