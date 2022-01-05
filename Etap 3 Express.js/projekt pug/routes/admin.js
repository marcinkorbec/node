const express = require('express');
const router = express.Router();
const News = require('../models/news')

router
	.all('*', (req, res, next) => {
		if (!req.session.admin) {
			res.redirect('/login')
		}

		next();
	})

	/* GET home page. */
	.get('/', (req, res) => {
		const newsData = new News({
			title: 'Tytuł testowy',
			description: 'Opis'
		})

		newsData.save((error) => {
			console.log(error);
		});
		console.log(req.session.admin);
		res.render('admin/index', {title: 'Admin'});
	})

	.get('/news/add', (req, res) => {
		res.render('admin/news-form', {title: 'Dodaj news'});
	})

module.exports = router;