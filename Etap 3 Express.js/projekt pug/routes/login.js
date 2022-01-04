const express = require('express');
const loginRouter = express.Router();
const login = 'admin';
const password = '1234';

/* GET home page. */
loginRouter
	.get('/', (req, res ) => {
		res.render('login', { title: 'Logowanie' });
	})

	.post('/', (req, res ) => {
		const body = req.body;

		if(body.login === login && body.password === password) {
			res.redirect('/admin');
		}
		else {
			res.redirect('/login');
		}

	});

module.exports = loginRouter;
