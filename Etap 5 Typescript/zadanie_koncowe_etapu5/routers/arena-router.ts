// miejsce gdzie będzie pokazana walka
// formularz wyboru wojownika
import {Router} from "express";
import {WarriorRecord} from "../records/warrior.record";
import {ValidationError} from "../utils/errors";
import {fight} from "../utils/fight";

export const arenaRouter = Router();

arenaRouter
    .get('/fight-form', async (req, res): Promise<void> => {
        const warriors = await WarriorRecord.listAll();
        res.render('arena.hbs',{
            warriors,
        })
    })

    .post('/fight', async (req, res):Promise<void> => {
        const {warrior1 :warrior1Id, warrior2: warrior2Id} = req.body;

        const warrior1 = await WarriorRecord.getOne(warrior1Id);
        const warrior2 = await WarriorRecord.getOne(warrior2Id);

        if (warrior1Id === warrior2Id) {
            throw new ValidationError("Obydwa wojowniki są takie same, proszę wybrać różne!")
        }

        if (!warrior1) {
            throw new ValidationError("Użytkownik nr 1 nie istnieje!")
        }

        if (!warrior2) {
            throw new ValidationError("Użytkownik nr 2 nie istnieje!")
        }

        const {log, winner} = fight(warrior1, warrior2);

        winner.wins++;
        await winner.update();

        res.render('fight', {
            log,
        });
    })