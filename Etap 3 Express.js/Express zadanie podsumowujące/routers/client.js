const express = require('express');
const clientRouter = express.Router();

clientRouter
	.get('/', (req, res) => {
		res.redirect('layouts/test.hbs');
	});

module.exports = {
	clientRouter,
}