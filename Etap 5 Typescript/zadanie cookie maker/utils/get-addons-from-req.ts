const getAddonsFromReq = (req) => {
	const {cookieAddons} = req.cookies;
	return cookieAddons ? JSON.parse(cookieAddons) : [];
}

export {
	getAddonsFromReq,
}