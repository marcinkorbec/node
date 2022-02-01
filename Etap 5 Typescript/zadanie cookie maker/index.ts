import * as express from 'express'; //pobieramy moduł express
import {json, static as expressStatic} from 'express';
import * as hbs from 'express-handlebars'; //pobieramy moduł handlebars
import * as cookieParser from 'cookie-parser'; //pobieramy moduł cookie parser
const app = express(); //tworzymy nową aplikację express
import { HomeRouter } from './routes/home'; // pobieramy customowy moduł homeRouter czyli ścieżka strony głównej
import { ConfiguratorRouter } from "./routes/configurator"; // pobieramy customowy moduł configuratorRouter czyli ścieżka konfiguratora
import { OrderRouter } from "./routes/order"; // pobieramy customowy moduł orderRouter czyli ścieżka order/zamówienie
import { handlebarsHelpers } from "./utils/handlebars-helpers";

export class CookieMakerApp {
    constructor() {
        this._loadData()
        this._configureApp();
        this._setRoutes();
        this._run();
    }

    _configureApp() {
        this.app = express(); //tworzymy nową aplikację express

        this.app.use(json()); // aplikacja używa:
        this.app.use(expressStatic('public')); // aplikacja używa: folder statyczny public
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
        this.app.use(cookieParser());
        console.log(typeof(req.cookies))
        const {cookieAddons} = req.cookies;
        return cookieAddons ? JSON.parse(cookieAddons) : [];
    }

    renderError(res, description) {
        return res.render('errors/error.hbs', {
            description: `${description}`
        });
    }

    getCookieSettings(req) {
        const {cookieBase: base} = req.cookies;
        const addons = this.getAddonsFromReq(req);
        const allBases = Object.entries(this.data.COOKIE_BASES);
        const allAddons = Object.entries(this.data.COOKIE_ADDONS);
        const sum = (base ? handlebarsHelpers.findPrice(allBases, base) : 0)
            + addons.reduce((prev, curr) => {
                return prev + handlebarsHelpers.findPrice(allAddons, curr)
            }, 0);

        return {
            //Wybrane rzeczy
            addons,
            base,

            //obliczenia
            sum,

            //inne możliwości
            allBases,
            allAddons,
        }
    }
    _loadData() {
        this.data = {
            COOKIE_BASES,
            COOKIE_ADDONS,
        };
    }
}

new CookieMakerApp();