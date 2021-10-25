const express = require('express');
const { getAddonsFromReq } = require('../utils/get-addons-from-req')

const {COOKIE_ADDONS} = require("../data/cookie-data");

const errorRendering = (res) => {
	 return res.render('errors/error.hbs', {
		description: `${res} nie istnieje w bazie!!!`
	});
}

const errorRenderingAlreadyWasAdded = (res) => {
	return res.render('errors/error.hbs', {
		description: `Dodatek ${res} został już dodany!!!`
	});
}

module.exports = {
	errorRenderingAlreadyWasAdded,
	errorRenderingNotExistInDatabase
}