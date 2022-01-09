const express = require('express');
const router = express.Router();
const News = require('../models/news')
const Quiz = require("../models/quiz");
const defaultSort = -1;


router
	/* GET all articles to api. */
	.get('/', (req, res) => {
		const search = req.query.search || '';
		let sort = req.query.sort || -1;

		if (sort !== 1 || sort !== -1) {
			sort = defaultSort;
		}

		const findNews = News
			.find({title: new RegExp(search.trim(), 'i')})
			.sort({date: sort})
			//.select('_id title description');
		;

		findNews.exec((err, data) => {
			res.json(data);
		})
	})

	/* GET one article to api. */
	.get('/:id', (req, res) => {
		const id = req.params.id;

		const findNews = News
			.findById(id);
			//.select('_id title description');

		findNews.exec((err, data) => {
			res.json(data);
		})
	})



module.exports = router;