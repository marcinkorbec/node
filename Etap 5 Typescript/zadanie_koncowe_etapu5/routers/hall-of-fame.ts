// ranking lista najlepszych wojowników
import {Router} from "express";

export const fameRouter = Router();

fameRouter
    .get('/ranking', (req, res):void => {
        res.render('ranking.hbs',{})
    })

