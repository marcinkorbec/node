//formularz
//zapisanie wojownika do bazy
import {Router} from "express";

export const warriorRouter = Router();

warriorRouter

    .get('/register', (req, res):void => {
        res.render('register.hbs',{})
    })

    .post('/', (req, res):void => {
        console.log(req.body)
        res.render('added.hbs',{})
    })