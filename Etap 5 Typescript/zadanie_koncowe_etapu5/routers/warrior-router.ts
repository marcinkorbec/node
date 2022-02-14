//formularz
//zapisanie wojownika do bazy
import { Router } from "express";
import { WarriorRecord } from "../records/warrior.record";
import { ValidationError } from "../utils/errors";

export const warriorRouter = Router();

warriorRouter

    .get('/register', (req, res): void => {
        res.render('register.hbs', {})
    })

    .post('/', async (req, res): Promise<void> => {
        const warrior = new WarriorRecord({
            ...req.body,
            name: req.body.name,
            strong: Number(req.body.strong),
            defense: Number(req.body.defense),
            resilience: Number(req.body.resilience),
            agility: Number(req.body.agility),
        });

        if (await WarriorRecord.isNameTaken(req.body.name)) {
            throw new ValidationError(`Imię ${req.body.name} jest zajęte! Wybierz inne!`)
        }

        else {
            const id = await warrior.insert();
            res.render('added.hbs', {
                name: warrior.name,
                id,
            })
        }
    })