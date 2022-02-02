import {Request} from "express";

const getAddonsFromReq = (req: Request) => {
	const {cookieAddons} = req.cookies;
	return cookieAddons ? JSON.parse(cookieAddons) : [];
}

export {
	getAddonsFromReq,
}