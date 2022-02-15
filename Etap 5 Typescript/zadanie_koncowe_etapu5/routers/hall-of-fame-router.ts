// ranking lista najlepszych wojowników
import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";

export const fameRouter = Router();

fameRouter
    .get('/fame', async(req, res): Promise<void> => {
        const topWarriors = WarriorRecord.topList(10);
        console.log(topWarriors);
        res.render('hall-of-fame.hbs',{
            warriors: topWarriors,
        })
    })

