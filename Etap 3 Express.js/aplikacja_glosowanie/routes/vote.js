const express = require('express');
const voteRouter = express.Router();

voteRouter
	.get('/', (req, res) => {
		res.render('/vote.hbs');
	});

module.exports = {
	voteRouter,
}