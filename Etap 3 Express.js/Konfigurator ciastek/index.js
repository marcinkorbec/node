const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const app = express();
const { appRouter } = require('./routes/route');

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use('/', appRouter);
app.engine('.hbs', hbs({extname:'.hbs'}));
app.set('view engine', '.hbs');

app.listen(3000);

console.log('Program działa.')