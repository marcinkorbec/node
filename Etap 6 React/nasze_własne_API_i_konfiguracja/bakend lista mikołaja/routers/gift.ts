import {Router, Request, Response} from "express";
import {GiftRecord} from "../records/gift.record";

export const giftRouter = Router();

giftRouter

	.get('/gifts', async (req: Request, res: Response): Promise<void> => {
		const giftsList = await GiftRecord.listAll();

		res.json({
			giftsList,
		});
	})
  
  .delete('/:id', async (req, res) => {
  
  }
  
  )

	.post('/', async (req: Request, res: Response): Promise<void> => {
		const data = {
			...req.body,
			count: Number(req.body.count),
		};

		const newGift = new GiftRecord(data);
		await newGift.insert();

		res.redirect('/gift');
	});

