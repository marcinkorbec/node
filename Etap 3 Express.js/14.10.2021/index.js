const express = require('express');
const {voteRouter} = require('./routes/vote');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/name', voteRouter);

app.listen(3000, 'localhost');

