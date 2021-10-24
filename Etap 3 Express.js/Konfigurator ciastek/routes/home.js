const express = require('express');
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookie-data");
const {handlebarsHelpers} = require("../handlebars-helpers");
const homeRouter = express.Router();


homeRouter
	.get('/', (req, res) => {
		const sum = handlebarsHelpers.findPrice(Object.entries(COOKIE_BASES), 'jasne')
					+ ['kokos', 'czekolada', 'miód'].reduce((prev, curr) => {
						return prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr)
			}, 0);
		res.render('home/index.hbs', {
			cookie: {
				base: 'jasne',
				addons: ['kokos', 'czekolada', 'miód'],
			},
			bases: Object.entries(COOKIE_BASES), // Tutaj zmieniamy to w tablice dwuwymiarowa zeby nie uzywac kluczy lecz samego indeksu
			addons: Object.entries(COOKIE_ADDONS),
			sum,
		});
	});

module.exports = {
	homeRouter,
}