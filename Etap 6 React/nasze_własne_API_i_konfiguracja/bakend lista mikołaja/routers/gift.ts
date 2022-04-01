import {Router, Request, Response} from "express";
import {GiftRecord} from "../records/gift.record";
import {ValidationError} from "../utils/errors";

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
    
    res.end();
  })

	.post('/', async (req: Request, res: Response): Promise<void> => {
		const data = {
			...req.body,
			count: Number(req.body.count),
		};

		const newGift = new GiftRecord(data);
		await newGift.insert();

		res.redirect('/gift');
	});

