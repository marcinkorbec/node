const express = require('express');
const nameRouter = require('./routes/name');

const app = express;

app.use(express.json());
app.use('/name', nameRouter);

app.listen(3000, 'localhost');

