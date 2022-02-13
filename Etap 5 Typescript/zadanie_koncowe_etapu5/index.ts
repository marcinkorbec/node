import * as express from"express";
import 'express-async-errors';
import * as methodOverride  from "method-override";
import {engine} from "express-handlebars";
import {handleError} from "./utils/errors";
import {homeRouter} from "./routers/home-router";
import {arenaRouter} from "./routers/arena-router";
import {fameRouter} from "./routers/hall-of-fame-router";
import {warriorRouter} from "./routers/warrior-router";
// import {handlebarsHelpers} from "./utils/handlebars-helpers";
import'./utils/db';
import {WarriorRecord} from "./records/warrior.record";

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
app.use('/arena', arenaRouter);
app.use('/hall-of-fame', fameRouter);
app.use('/warrior', warriorRouter);

app.use(handleError);

const warrior = new WarriorRecord({
    name: 'Xyz',
    strong: 7,
    defense: 1,
    resilience: 1,
    agility: 1,
})
console.log(warrior)
app.listen(3008, '0.0.0.0', () => {
    console.log('Program działa na adresie http://localhost:3008');
})