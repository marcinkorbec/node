const renderError = (res, description) => {
	return res.render('errors/error.hbs', {
		description: `${description}`
	});
};

module.exports = {
	renderError,
}