const express = require('express');
const hbs = require('express-handlebars');
const app - express();

app.engine('.hbs', hbs({extname:'.hbs'}));
app.set('view engine', '.hbs');

app.listen(3000);