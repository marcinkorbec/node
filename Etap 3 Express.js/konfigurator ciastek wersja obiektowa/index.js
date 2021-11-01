const express = require('express'); //pobieramy moduł express
const hbs = require('express-handlebars'); //pobieramy moduł handlebars
const cookieParser = require('cookie-parser'); //pobieramy moduł cookie parser
const { homeRouter } = require('./routes/home'); // pobieramy customowy moduł homeRouter czyli ścieżka strony głównej
const { configuratorRouter } = require("./routes/configurator"); // pobieramy customowy moduł configuratorRouter czyli ścieżka konfiguratora
const { orderRouter } = require("./routes/order"); // pobieramy customowy moduł orderRouter czyli ścieżka order/zamówienie
const { handlebarsHelpers } = require("./utils/handlebars-helpers");

class CookieMakerApp {

	constructor() {
		this.app.set('view engine', '.hbs'); //aplikacja ustaw: silnik widoków .hbs
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
	}

	_setRoutes() {
		this.app.use('/', homeRouter); // aplikacja używa: scieżkowacza strony głównej
		this.app.use('/', configuratorRouter); // aplikacja używa: moduł configuratorRouter
		this.app.use('/', orderRouter); // aplikacja używa: moduł orderRouter
	}

	_run() {
		this.app.listen(3000); // aplikacja nasłuchuje na porcie 3000
		console.log('Program działa.')
	}
}

new CookieMakerApp() {
	
}
