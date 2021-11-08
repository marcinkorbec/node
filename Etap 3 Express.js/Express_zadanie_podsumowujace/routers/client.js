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
			client: db.getOne(req.params.id),
		})
	})

	.put('/:id', (req, res) => {
		res.send('Zmodyfikuj pojedynczego.')
	})

	.post('/', (req, res) => {
		const id = db.create(req.body)
		res.render('client/added.hbs', {
			id,
		})
	})

	.delete('/deleted/:id', (req, res) => {
		db.delete(req.params.id);
		res.render('client/deleted.hbs')
	})

	.get('/form/add', (req, res) => {
		res.render('./client/forms/add.hbs');
	})

	.get('/form/edit/:id', (req, res) => {
		res.render('./client/forms/add.hbs', {
			client: db.getOne(req.params.id)
		});
	})

module.exports = {
	clientRouter,
}