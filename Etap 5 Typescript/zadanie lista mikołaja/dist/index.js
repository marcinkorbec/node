import * as express from "express";
require('express-async-errors');
import methodOverride from "method-override";
import { engine } from "express-handlebars";
import { handleError } from "./utils/errors";
import { homeRouter } from "./routers/home";
import { childRouter } from "./routers/child";
import { giftRouter } from "./routers/gift";
require('./utils/db');
import { handlebarsHelpers } from "./utils/handlebars-helpers";
const app = express();
app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.engine('.hbs', engine({
    extname: '.hbs',
    helpers: handlebarsHelpers, // Dodatkowe funkcjonalności, które chcemy dodać do Handlebarsów
}));
app.set('view engine', '.hbs');
app.use('/', homeRouter);
app.use('/child', childRouter);
app.use('/gift', giftRouter);
app.use(handleError);
app.listen(3002, '0.0.0.0', () => {
    console.log('Program działa na adresie http://localhost:3002');
});
//# sourceMappingURL=index.js.map