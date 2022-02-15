// miejsce gdzie będzie pokazana walka
// formularz wyboru wojownika
import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";

export const arenaRouter = Router();

arenaRouter
    .get('/fight-form', async (req, res): Promise<void> => {
        const warriors = await WarriorRecord.listAll();
        res.render('arena.hbs',{
            warriors,
        })
    })

    .post('/fight', (req, res):void => {
        res.render('fight.hbs',{})
    })