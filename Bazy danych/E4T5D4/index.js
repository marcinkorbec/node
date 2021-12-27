const express = require('express');
const methodOverride = require('method-override');
const app = express();
const hbs = require('express-handlebars');
const {handleError} = require("./utils/error");

app.use(methodOverride('_method'));
app.use(express.urlencoded({
    extended: true,
}));
app.use(express.static('public'));
app.use(express.json()); //Content-type: application/json
app.engine('.hbs', hbs.engine({
    extname: '.hbs',
    helpers: 'handlebarsHelpers',
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.send('<h1>Hello World</h1>');
});

app.use(handleError);

app.listen(3002, '0.0.0.0', () => {
    console.log('Program działa na adresie http://localhost:3002');
})