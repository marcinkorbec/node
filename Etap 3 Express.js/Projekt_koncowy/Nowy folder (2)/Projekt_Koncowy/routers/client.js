const express = require('express');
const {DbClient} = require('../utils/db');
const clientRouter = express.Router();

clientRouter
  .get('/', (req, res) => {

    res.render('client/show-all',{
      clients : DbClient.getAll()
    })
  })
  .get('/:id',(req, res) => {
    res.render('client/get-one',{
      client : DbClient.getOne(req.params.id)
    })
  })
  .post('/form/add',(req, res) => {
    const id = DbClient.create(req.body);
    res.render('client/added',{
      client : DbClient.getOne(id)
    })
  })
  .delete('/:id',(req, res) => {
    const name = DbClient.getOne(req.params.id).name;
    DbClient.delete(req.params.id);
    res.render('deleted',{
      name
    })
  })
  .get('/form/add',(req, res) => {
    res.render('client/form_create')
  })
  .get('/form/edit/:id',(req, res) => {

    res.render('client/edit-user',{
      client: DbClient.getOne(req.params.id)
    })
  })
  .put('/form/edit/:id',(req, res) => {
    DbClient.update(req.params.id,req.body)
    res.render('client/get-one',{
      client: DbClient.getOne(req.params.id)
    })
  })


module.exports = {
  clientRouter
}
