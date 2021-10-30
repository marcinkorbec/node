const {getAddonsFromReq} = require("./get-addons-from-req");
const {COOKIE_BASES, COOKIE_ADDONS} = require("../data/cookie-data");
const {handlebarsHelpers} = require("./handlebars-helpers");


function getCookieSettings(req) {
	const {cookieBase, cookieAddons} = req.cookies;
	const addons = getAddonsFromReq(req);
	const allBases = Object.entries(COOKIE_BASES);
	const allAddons = Object.entries(COOKIE_ADDONS);
	const sum = ( cookieBase ? handlebarsHelpers.findPrice(allBases, cookieBase) : 0)
		+ addons.reduce((prev, curr) => {
			return prev + handlebarsHelpers.findPrice(allAddons, curr)
		}, 0);

	return {
		//Wybrane rzeczy
		addons,
		cookieBase,
		cookieAddons,

		//obliczenia
		sum,

		//inne możliwości
		allBases,
		allAddons,
	}
}

module.exports = {
	getCookieSettings,
}