const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const app = express();
const { homeRouter } = require('./routes/home');
const {configuratorRouter} = require("./routes/configurator");
const {orderRouter} = require("./routes/order");

app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use('/', homeRouter);
app.use('/configurator', configuratorRouter);
app.use('/order', orderRouter);
app.engine('.hbs', hbs({extname:'.hbs'}));
app.set('view engine', '.hbs');

app.listen(3000);

console.log('Program działa.')