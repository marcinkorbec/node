const express = require('express');
const hbs = require('express-handlebars');
const {taskRouter} = require('./routes/task');
const app = express();

app.engine('.hbs', hbs({extname:'.hbs'}));
app.set('view engine', '.hbs');
app.use(express.json());
app.use(express.static('views'));
app.use('/routes', taskRouter);

console.log('Program działa.')

app.listen(3000, 'localhost');