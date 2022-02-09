//formularz
//zapisanie wojownika do bazy
import {Router} from "express";

export const warriorRouter = Router();

warriorRouter
    .get('/register', (req, res):void => {
        res.render('views/register.hbs',{})
    })
    .post('/', (req, res):void => {
        res.render('views/ranking.hbs',{})
    })