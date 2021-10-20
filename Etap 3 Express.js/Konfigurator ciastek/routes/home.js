const express = require('express');
const homeRouter = express.Router();

homeRouter
  .post('/set', (req, res) => {
    const {name} = req.body;
    res.cookie()
  })

  .get('/', (req, res) => {
  res.render('home');
});

module.exports = {
  homeRouter,
}