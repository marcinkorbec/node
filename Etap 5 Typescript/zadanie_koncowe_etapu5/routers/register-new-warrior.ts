//formularz
//zapisanie wojownika do bazy

import {Router} from "express";

export const register = Router();

register
    .get('/register', (req, res):void => {
        res.render('views/register.hbs',{})
    })