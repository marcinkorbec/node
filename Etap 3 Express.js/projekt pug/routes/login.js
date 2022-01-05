const express = require('express');
const loginRouter = express.Router();
const login = 'admin';
const password = '1234';


loginRouter
	/* GET home page. */
	.get('/', (req, res ) => {
		res.render('login', { title: 'Logowanie' });
	})

	/* SEND login details and redirect to inside system or re-login. */
	.post('/', (req, res ) => {
		const body = req.body;

		if(body.login === login && body.password === password) {
			req.session.admin = 1;
			res.redirect('/admin');
		}
		else {
			res.redirect('/login');
		}

	});

module.exports = loginRouter;
