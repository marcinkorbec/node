const express = require('express');
const router = express.Router();
const Quiz = require('../models/quiz');


router
	/* GET quiz page. */
	.get('/', (req, res) => {
		const show = !req.session.vote;
		Quiz.find({}, (error, data) => {
			let sum = 0;
			data.forEach((item) => {
				sum += item.vote;
			})
			res.render('quiz', {title: 'Quiz', data, sum});
		})
	})

	/* SEND votes from quiz page to database Seasons. */
	.post('/', (req, res) => {
		const id = req.body.quiz;

		Quiz.findOne({_id: id}, (error, data) => {
			data.vote = data.vote + 1;
			data.save((err) => {
				req.session.vote = 1;
				res.redirect('/quiz');
			});
		})
	})

module.exports = router;