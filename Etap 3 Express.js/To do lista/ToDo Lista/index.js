const express = require('express');
const hbs = require('express-handlebars');
// const {voteRouter} = require('./routes/vote');
const app = express();

app.use(express.json());
app.use(express.static('public'));
app.use('/routes', taskRouter);

app.listen(3000, 'localhost');