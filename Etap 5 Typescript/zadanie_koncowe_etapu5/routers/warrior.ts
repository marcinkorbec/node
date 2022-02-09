//formularz
//zapisanie wojownika do bazy
import {Router} from "express";

export const registerRouter = Router();

registerRouter
    .get('/register', (req, res):void => {
        res.render('views/register.hbs',{})
    })