const renderError = (res, description) => {
	return res.render('errors/error.hbs', {
		description: `${description}`
	});
};

export {
	renderError,
}