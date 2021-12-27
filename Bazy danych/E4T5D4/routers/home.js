const express = require('express');
const homeRouter = express.Router();

homeRouter
	.get('/', (req, res) => {
		res.render('layouts/main.hbs');
	})

	.get('/children', (req, res) => {
		res.render('children/children-list.hbs');
	});

module.exports = {
	homeRouter,
}