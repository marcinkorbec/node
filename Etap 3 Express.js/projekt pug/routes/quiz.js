const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');

	/* GET quiz page. */
router
	.get('/', (req, res) => {
		Quiz.find({}, (error, databaseSeasons) => {
			console.log(databaseSeasons);
			res.render('quiz', {title: 'Quiz', databaseSeasons});
		})
	})

	/* SEND votes to database Seasons. */
	.post('/', (req, res) => {
		const dataSend = req.bosy.quiz;

		Quiz.find({}, (error, data) => {
			res.render('quiz', {title: 'Quiz', data});
		})
	})

module.exports = router;