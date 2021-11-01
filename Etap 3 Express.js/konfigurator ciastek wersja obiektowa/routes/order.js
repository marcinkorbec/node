const express = require('express');
const {getCookieSettings} = require("../utils/get-cookie-settings");
const orderRouter = express.Router();

class OrderRouter {
	constructor(cmapp) {
		this.cmapp = cmapp;
		this.router = express.Router();
		this.orderSummary();
		this.orderThanks();
	}

	orderSummary() {
	this.router.get('/order/summary', (req, res) => {
			const {base, addons, sum, allAddons, allBases} = getCookieSettings(req);
			res.render('order/summary', {
				cookie: {
					base,
					addons,
				},
				allBases,
				allAddons,
				sum,
			});
		})
	}

	orderThanks() {
	this.router.get('/order/thanks', ((req, res) => {
			const {sum, addons, cookieBase} = getCookieSettings(req);
			res
				.clearCookie('cookieBase')
				.clearCookie('cookieAddons')
				.render('order/thanks', {
					cookieBase,
					addons,
					sum,
				})
		}))
	}
}

module.exports = {
	OrderRouter,
}