const express = require('express');
const hbs = require('express-handlebars');
const {urlencoded} = require("express");
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

app.get('/', (req, res) => {
	res.render('test.hbs')
})

app.listen(3000, '0.0.0.0', () => {
	console.log('Program działa na porcie http://localhost:3000');
});