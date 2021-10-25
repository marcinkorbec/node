const errorRenderingNotExistInDatabase = () => {
	res.render('errors/error.hbs', {
		description: `${addonName} nie istnieje w bazie!!!`
	});
}

const errorRenderingAlreadyWasAdded = () => {
	res.render('errors/error.hbs', {
		description: `Dodatek ${addonName} został już dodany!!!`
	});
}

module.exports = {
	errorRenderingAlreadyWasAdded,
	errorRenderingNotExistInDatabase
}