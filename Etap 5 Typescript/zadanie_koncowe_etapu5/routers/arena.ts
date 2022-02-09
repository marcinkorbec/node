// miejsce gdzie będzie pokazana walka
// formularz wyboru wojownika

import {Router} from "express";

export const arenaRouter = Router();

arenaRouter
    .get('/arena', (req, res):void => {
        res.render('views/arena.hbs',{})
    })