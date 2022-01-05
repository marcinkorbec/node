const express = require('express');
const router = express.Router();
const News = require('../models/news')

router.all('*', (req, res, next) => {
	if (!req.session.admin) {
		res.redirect('/login')
	}

	next();
})

/* GET home page. */
router.get('/', (req, res ) => {
	const newsData = new News({
		title: 'Tytuł testowy',
		description: 'Opis'
	})

	newsData.save((error) => {
		console.log(error);
	});
	console.log(req.session.admin);
	res.render('admin/index', { title: 'Admin' });
});

router.get('/news/add', (req, res) => {

})

module.exports = router;