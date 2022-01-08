const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

/* GET home page. */
router.get('/', (req, res) => {
	Quiz.find({}, (error, databaseSeasons) => {
		console.log(databaseSeasons)
		res.render('quiz', {title: 'Quiz', databaseSeasons});
	})
});

module.exports = router;