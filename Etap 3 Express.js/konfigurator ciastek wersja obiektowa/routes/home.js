const express = require('express');
const { getCookieSettings } = require("../utils/get-cookie-settings");

class HomeRouter {
	constructor() {
		this.router = express.Router();
		this.setUpRoutes();
	}
	setUpRoutes() {
		this.router.get('/', (req, res) => {
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
	}
}

const home = new HomeRouter();
console.log(home);




module.exports = {
	HomeRouter,
}