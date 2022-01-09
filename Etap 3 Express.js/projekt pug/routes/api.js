const express = require('express');
const router = express.Router();
const News = require('../models/news')
const defaultSort = -1;

/* GET api. */
router
	.get('/', (req, res) => {
		const search = req.query.search || '';
		let sort = req.query.sort || -1;

		if (sort !== 1 || sort !== -1) {
			sort = defaultSort;
		}

		const findNews = News
			.find({title: new RegExp(search.trim(), 'i')})
			.sort({date: sort})
		;

		findNews.exec((err, data) => {
			res.json(data);
		})
	})



module.exports = router;