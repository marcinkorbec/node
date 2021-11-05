const express = require('express');
const homeRouter = express.Router();

homeRouter
	.get('/', (req, res) => {
		res.redirect('layouts/test.hbs');
	});

module.exports = {
	homeRouter,
}