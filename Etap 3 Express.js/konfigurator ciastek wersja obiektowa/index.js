const express = require('express'); //pobieramy moduł express
const hbs = require('express-handlebars'); //pobieramy moduł handlebars
const cookieParser = require('cookie-parser'); //pobieramy moduł cookie parser
const { HomeRouter } = require('./routes/home'); // pobieramy customowy moduł homeRouter czyli ścieżka strony głównej
const { ConfiguratorRouter } = require("./routes/configurator"); // pobieramy customowy moduł configuratorRouter czyli ścieżka konfiguratora
const { OrderRouter } = require("./routes/order"); // pobieramy customowy moduł orderRouter czyli ścieżka order/zamówienie
const { handlebarsHelpers } = require("./utils/handlebars-helpers"); //pobieramy moduł z funkcjami pomocnymi dla handlebars

class CookieMakerApp {

	constructor() {
		this._configureApp();
		this._setRoutes();
		this._run();
		this.getAddonsFromReq();
		this.getAddonsFromReq();
	}

	_configureApp() {
		this.app = express(); //tworzymy nową aplikację express

		this.app.use(express.json()); // aplikacja używa:
		this.app.use(express.static('public')); // aplikacja używa: folder statyczny public
		this.app.use(cookieParser()); // aplikacja używa: modułu odczytywania ciastek
		this.app.engine('.hbs', hbs({
			extname:'.hbs', //rozszerzenie .hbs
			helpers: handlebarsHelpers, //plik gdzie znajdują się pomocne pliki dla handlebars
		})); // silnik aplikacji: handlebars
		this.app.set('view engine', '.hbs'); //aplikacja ustaw: silnik widoków .hbs
	}

	_setRoutes() {
		this.app.use('/', new HomeRouter(this).router); // aplikacja używa: scieżkowacza strony głównej
		this.app.use('/', new ConfiguratorRouter(this).router); // aplikacja używa: moduł configuratorRouter
		this.app.use('/', new OrderRouter(this).router); // aplikacja używa: moduł orderRouter
	}

	_run() {
		this.app.listen(3000); // aplikacja nasłuchuje na porcie 3000
		console.log('Program działa.')
	}

	getAddonsFromReq(req) {
		const {cookieAddons: cookieAddons} = req.cookies;
		return cookieAddons ? JSON.parse(cookieAddons) : [];
	}

	renderError(res, description) {
		return res.render('errors/error.hbs', {
			description: `${description}`
		});
	};
}

new CookieMakerApp();
