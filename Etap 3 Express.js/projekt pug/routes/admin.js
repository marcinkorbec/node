const express = require('express');
const router = express.Router();
const News = require('../models/news')

router
	/* THIS Router is first, and always works first before the ones below do */
	.all('*', (req, res, next) => {
		if (!req.session.admin) {
			res.redirect('/login')
		}
		next();
	})

	/* GET home page. */
	.get('/', (req, res) => {
		const data = News.find({}, (err, data) => {
			res.render('admin/index', {
				title: 'Admin',
				data,
			});
		});
	})

	/* GET news add form */
	.get('/news/add', (req, res) => {
		res.render('admin/news-form', {title: 'Dodaj news', body: {}, errors: {}});
	})

	// ADD news to database
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

	/* DELETE news from database */
	.get('/news/delete/:id', (req, res) => {
		News.findByIdAndDelete(req.params.id, (err) => {
			res.redirect('/admin')
		})
	})

module.exports = router;