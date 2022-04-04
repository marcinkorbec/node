import {Router, Request, Response} from "express";
import {GiftRecord} from "../records/gift.record";
import {ValidationError} from "../utils/errors";
import {GiftEntity} from "../types";

export const giftRouter = Router();

giftRouter

	.get('/gifts', async (req: Request, res: Response): Promise<void> => {
		const giftsList = await GiftRecord.listAll();

		res.json({
			giftsList,
		});
	})
  
  .delete('/:id', async (req, res) => {
    const gift = await GiftRecord.getOne(req.params.id);
    
    if (!gift) {
      throw new ValidationError('Próbujesz usunąć coś czego nie ma!')
    }
    
    if (await gift.countGivenGifts() > 0) {
      throw new ValidationError('Nie można usunąć tego co jest używane!')
    }
  
    console.log(gift)
    await gift.delete();
    res.end();
  })

	.post('/', async (req: Request, res: Response): Promise<void> => {
		const newGift = new GiftRecord(req.body as GiftEntity);
		await newGift.insert();
    res.json(newGift);
	});

// const data = {
// 	...req.body, //to oznacza że wszystko to co wysyłaliśmy było wysyłane jako string
// 	count: Number(req.body.count), //ale count żeby był liczbą
// };