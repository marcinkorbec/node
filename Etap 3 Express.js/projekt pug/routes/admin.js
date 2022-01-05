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
		const data = News.find({}, (err, data) => {
			console.log(data)
			res.render('admin/index', {
				title: 'Admin',
				data,
			});
		});
	})

	.get('/news/add', (req, res) => {
		res.render('admin/news-form', {title: 'Dodaj news', body: {}, errors: {}});
	})

	.post('/news/add', (req, res) => {
		const body = req.body;
		const newsData = new News(body)
		const errors = newsData.validateSync();

		console.log(errors);

		newsData.save((error) => {
			if (error) {
				res.render('admin/news-form', {
					title: 'Dodaj news',
					errors,
					body,
				});
				return;
			}

			res.redirect('/admin')
		});


	})

module.exports = router;