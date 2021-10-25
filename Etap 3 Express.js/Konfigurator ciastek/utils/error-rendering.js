const express = require('express');

const errorRenderingNotExistInDatabase = (addonName) => {
	 return ('errors/error.hbs', {
		description: `${addonName} nie istnieje w bazie!!!`
	});
}

const errorRenderingAlreadyWasAdded = (addonName) => {
	return ('errors/error.hbs', {
		description: `Dodatek ${addonName} został już dodany!!!`
	});
}

module.exports = {
	errorRenderingAlreadyWasAdded,
	errorRenderingNotExistInDatabase
}