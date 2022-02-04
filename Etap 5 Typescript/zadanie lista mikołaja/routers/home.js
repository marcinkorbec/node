import {Request, Response, Router} from "express";

const homeRouter = Router();

homeRouter
	.get('/', (req: Request, res: Response) => {
		res.redirect('/child');
	});

export {
	homeRouter,
}