const express = require('express');
const hbs = require('express-handlebars');
const {taskRouter} = require('./routes/task');
const app = express();


app.use(express.json());
app.use(express.static('views'));
app.use('/', taskRouter);
app.engine('.hbs', hbs({extname:'.hbs'}));
app.set('view engine', '.hbs');


console.log('Program działa.')

app.listen(3000, 'localhost');