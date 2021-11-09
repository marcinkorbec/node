const express = require('express');
const {db} = require("../utils/clientsDb");
const clientRouter = express.Router();
const {ClientRecord} = require('../record/client-record')

clientRouter
	.get('/', (req, res) => {
		res.render('client/list-all.hbs', {
			clients: db.getAll(),
		});
	})

	.get('/:id', (req, res) => {
		const client = db.getOne(req.params.id);
		res.render('client/one.hbs', {
			client,
		})
	})

	.put('/:id', (req, res) => {
		const id = req.params.id;
		const update = db.update(req.params.id, req.body);
		res.render('client/modified.hbs', {
			name: req.body.name,
			update,
			id
		})
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
		res.render('client/forms/add.hbs');
	})

	.get('/form/edit/:id', (req, res) => {

		res.render('client/forms/edit.hbs', {
			client: db.getOne(req.params.id)
		});
	})

	.get('/error/404', (req, res) => {
		res.render('errors/error.hbs');
	})

module.exports = {
	clientRouter,
}