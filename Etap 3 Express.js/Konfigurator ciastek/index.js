const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const app = express();

app.use(cookieParser());
app.engine('.hbs', hbs({extname:'.hbs'}));
app.set('view engine', '.hbs');

app.listen(3000);