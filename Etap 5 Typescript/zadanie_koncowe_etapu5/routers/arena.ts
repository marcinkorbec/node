// miejsce gdzie będzie pokazana walka
// formularz wyboru wojownika
import {Router} from "express";

export const arenaRouter = Router();

arenaRouter
    .get('/fight-form', (req, res):void => {
        res.render('views/arena.hbs',{})
    })

    .post('/fight', (req, res):void => {
        res.render('views/arena.hbs',{})
    })