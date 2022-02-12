// strona główna
import {Router} from "express";

export const homeRouter = Router();

homeRouter
    .get('/home', (req, res):void => {
        res.render('home.hbs',{})
    })