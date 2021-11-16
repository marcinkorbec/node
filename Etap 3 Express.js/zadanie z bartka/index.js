const express = require('express');

const app = express();
const router = express.Router();
app.use('/', router);


// http://localhost:3005/app/add?value1=3&value2=5
router.get('/app/:math/?', (req, res) => {
    const { math } = req.params;
    const { value1, value2 } = req.query;

    let result = null;
    console.log(req.params, req.query);

    switch (math) {
        case 'add':
            result = Number(value1) + Number(value2);
            break;
        case 'multiply':
            result = Number(value1) * Number(value2);
            break;
        case 'substract':
            result = Number(value1) - Number(value2);
            break;
        default:
            result = "Hehe";
    }

    res.send(`Wynik działania to: ${typeof result === 'number' ? result.toFixed(2) : result}.`);
});

app.listen(3005, 'localhost');