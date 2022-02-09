// ranking lista najlepszych wojowników

import {Router} from "express";

const ranking = Router();

ranking
    .get('/ranking', (req, res):void => {
        res.render('views/ranking.hbs')
    })