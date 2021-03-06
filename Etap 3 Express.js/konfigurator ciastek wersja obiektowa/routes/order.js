const express = require('express');
const orderRouter = express.Router();

function getCookieSettings() {};

class OrderRouter {
	constructor(cmapp) {
		this.cmapp = cmapp;
		this.router = express.Router();
		this.setUpRoutes();
	}

	setUpRoutes() {
		this.router.get('/order/summary', this.summary);
		this.router.get('/order/thanks', this.thanks);
	}

	summary = (req, res) => {
		const {sum, addons, base, allBases, allAddons} = this.cmapp.getCookieSettings(req);

		res.render('order/summary', {
			cookie: {
				base,
				addons,
			},
			allBases,
			allAddons,
			sum,
		});
	};

	thanks = (req, res) => {
		const {sum} = this.cmapp.getCookieSettings(req);

		res
			.clearCookie('cookieBase')
			.clearCookie('cookieAddons')
			.render('order/thanks', {
				sum,
			});
	}

}

module.exports = {
	OrderRouter,
}