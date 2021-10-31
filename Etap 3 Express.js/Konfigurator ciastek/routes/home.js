const express = require('express');
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookie-data");
const {handlebarsHelpers} = require("../utils/handlebars-helpers");
const {getAddonsFromReq} = require("../utils/get-addons-from-req");
const {getCookieSettings} = require("../utils/get-cookie-settings");
const homeRouter = express.Router();

homeRouter
	.get('/', (req, res) => {
		const {base, addons, sum, allAddons, allBases} = getCookieSettings(req);
		res.render('home/index.hbs', {
			cookie: {
				base,
				addons,
			},
			allBases,
			allAddons,
			sum,
		});
	});

module.exports = {
	homeRouter,
}