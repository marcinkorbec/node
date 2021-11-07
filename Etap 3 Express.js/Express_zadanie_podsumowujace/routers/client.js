const express = require('express');
const {db} = require("../utils/clientsDb");
const clientRouter = express.Router();

clientRouter
	.get('/', (req, res) => {
		res.render('client/list-all.hbs', {
			clients: db.getAll(),
		});
	})

	.get('/:id', (req, res) => {
		res.render('client/one.hbs', {
			client: db.getOne(),
		})
	})

	.put('/:id', (req, res) => {
		res.send('Zmodyfikuj pojedynczego.')
	})

	.post('/', (req, res) => {
		res.send('Dodaj pojedynczego!')
	})

	.delete('/', (req, res) => {
		res.send('Usuń pojedynczego!')
	})

module.exports = {
	clientRouter,
}