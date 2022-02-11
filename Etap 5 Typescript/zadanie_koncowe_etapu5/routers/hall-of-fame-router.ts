// ranking lista najlepszych wojowników
import {Router} from "express";

export const fameRouter = Router();

fameRouter
    .get('/fame', (req, res):void => {
        res.render('hall-of-fame.hbs',{})
    })

