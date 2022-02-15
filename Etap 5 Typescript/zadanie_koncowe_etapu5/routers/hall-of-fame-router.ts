// ranking lista najlepszych wojowników
import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";

export const fameRouter = Router();

fameRouter
    .get('/fame', async(req, res): Promise<void> => {
        const topWarriors = (
            await WarriorRecord.topList(10)
        ).map((warrior, index) => {
            return {
                place: index + 1,
                warrior,
            }
        });
        console.log(topWarriors);
        res.render('hall-of-fame.hbs',{
            warriors: topWarriors,
        })
    })

