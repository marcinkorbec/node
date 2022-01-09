const express = require('express');
const router = express.Router();
const News = require('../models/news')

/* GET api. */
router.get('/', (req, res ) => {
	const search =  req.query.search || '';
	const sort =  req.query.sort || -1;

	const findNews = News
		.find({ title: new RegExp(search.trim(), 'i') })
		.sort({ date: sort})
	;

	findNews.exec((err, data) => {
		res.json(data);
	})

});

module.exports = router;