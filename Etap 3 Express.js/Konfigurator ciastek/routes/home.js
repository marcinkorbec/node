const express = require('express');
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookie-data");
const {handlebarsHelpers} = require("../utils/handlebars-helpers");
const {getAddonsFromReq} = require("../utils/get-addons-from-req");
const homeRouter = express.Router();

homeRouter
	.get('/', (req, res) => {
		const {cookieBase, cookieAddons} = req.cookies;
		const addons = getAddonsFromReq(req);
		const sum = ( cookieBase ? handlebarsHelpers.findPrice(Object.entries(COOKIE_BASES), cookieBase) : 0)
					+ addons.reduce((prev, curr) => {
						return prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr)
			}, 0);
		res.render('home/index.hbs', {
			cookie: {
				base: cookieBase,
				addons: addons,
			},
			bases: Object.entries(COOKIE_BASES), // Tutaj zmieniamy to w tablice dwuwymiarowa zeby nie uzywac kluczy lecz samego indeksu
			addons: Object.entries(COOKIE_ADDONS),
			sum,
		});
	});

module.exports = {
	homeRouter,
}