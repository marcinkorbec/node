const express = require('express');
const clientRouter = express.Router();

clientRouter
	.get('/client', (req, res) => {
		res.render('layouts/test.hbs');
	});

module.exports = {
	clientRouter,
}