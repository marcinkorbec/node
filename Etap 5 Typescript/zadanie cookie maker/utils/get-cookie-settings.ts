import {getAddonsFromReq} from "./get-addons-from-req";
import {COOKIE_BASES, COOKIE_ADDONS} from "../data/cookie-data";
import {handlebarsHelpers} from "./handlebars-helpers";
import { UserRequest, UserResponse } from "../types/types";


function getCookieSettings(req: Request | UserRequest) {
	const {cookieBase: base} = req.cookies;
	const addons = getAddonsFromReq(req);
	const allBases = Object.entries(COOKIE_BASES);
	const allAddons = Object.entries(COOKIE_ADDONS);
	const sum = ( base ? handlebarsHelpers.findPrice(allBases, base) : 0)
		+ addons.reduce((prev, curr) => {
			return prev + handlebarsHelpers.findPrice(allAddons, curr)
		}, 0);

	return {
		//Wybrane rzeczy
		addons,
		base,

		//obliczenia
		sum,

		//inne możliwości
		allBases,
		allAddons,
	}
}

export {
	getCookieSettings,
}