const express = require('express');
const hbs = require('express-handlebars');
const {urlencoded} = require("express");
const {clientRouter} = require("./routers/client");
const {homeRouter} = require("./routers/home");
const {db} = require('./utils/db');
const app = express();

app.use(express.urlencoded({
	extended: true
}));
app.use(express.static('public'));
app.use(express.json());
app.engine('.hbs', hbs({
	extname: '.hbs',
	helpers: 'handlebarsHelpers'
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);
app.get('/test', (req, res) => {

	res.send(JSON.stringify(db.getAll()));
})

app.listen(3000, '0.0.0.0', () => {
	console.log('Program działa na porcie http://localhost:3000');
});