const express = require('express');
const clientRouter = express.Router();

clientRouter
	.get('/', (req, res) => {
		res.send('Pobierz Wszystkie');
	})

	.get('/:id', (req, res) => {
		res.send('Pobierz pojedynczego!')
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