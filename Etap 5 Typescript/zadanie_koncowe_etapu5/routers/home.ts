// strona główna

import {Router} from "express";

 export const homeRouter = Router();

homeRouter
    .get('/ranking', (req, res):void => {
        res.render('views/home.hbs',{})
    })