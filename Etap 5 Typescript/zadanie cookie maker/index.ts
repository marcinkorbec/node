import * as express from 'express'; //pobieramy moduł express
import * as hbs from 'express-handlebars'; //pobieramy moduł handlebars
import * as cookieParser from 'cookie-parser'; //pobieramy moduł cookie parser
const app = express(); //tworzymy nową aplikację express
import { homeRouter } from './routes/home'; // pobieramy customowy moduł homeRouter czyli ścieżka strony głównej
import { configuratorRouter } from "./routes/configurator"; // pobieramy customowy moduł configuratorRouter czyli ścieżka konfiguratora
import { orderRouter } from "./routes/order"; // pobieramy customowy moduł orderRouter czyli ścieżka order/zamówienie
import { handlebarsHelpers } from "./utils/handlebars-helpers";

app.use(express.json()); // aplikacja używa:
app.use(express.static('public')); // aplikacja używa: folder statyczny public
app.use(cookieParser()); // aplikacja używa: modułu odczytywania ciastek
app.use('/', homeRouter); // aplikacja używa: scieżkowacza strony głównej
app.use('/', configuratorRouter); // aplikacja używa: moduł configuratorRouter
app.use('/', orderRouter); // aplikacja używa: moduł orderRouter

app.engine('.hbs', hbs({
	extname:'.hbs',
	helpers: handlebarsHelpers,
})); // silnik aplikacji: handlebars

app.set('view engine', '.hbs'); //aplikacja ustaw: silnik widoków .hbs

app.listen(3000); // aplikacja nasłuchuje na porcie 3000

console.log('Program działa.')