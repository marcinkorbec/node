import * as express from"express";
import 'express-async-errors';
import * as methodOverride  from "method-override";
import {engine} from "express-handlebars";
// import {handleError} from "./utils/errors";
import {homeRouter} from "./routers/home";
import {arenaRouter} from "./routers/arena";
import {fameRouter} from "./routers/hall-of-fame";
import {warriorRouter} from "./routers/warrior";
// import {handlebarsHelpers} from "./utils/handlebars-helpers";
import'./utils/db';

const app = express();

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    // helpers: handlebarsHelpers, // Dodatkowe funkcjonalności, które chcemy dodać do Handlebarsów
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/', arenaRouter);
app.use('/', fameRouter);
app.use('/warrior', warriorRouter);

// app.use(handleError);

app.listen(3008, '0.0.0.0', () => {
    console.log('Program działa na adresie http://localhost:3008');
})