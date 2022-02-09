// ranking lista najlepszych wojowników

import {Router} from "express";

export const rankingRouter = Router();

rankingRouter
    .get('/ranking', (req, res):void => {
        res.render('views/ranking.hbs',{})
    })