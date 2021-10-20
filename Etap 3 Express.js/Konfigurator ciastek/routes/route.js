const express = require('express');
const appRouter = express.Router();

appRouter
  .post('/set', (req, res) => {
    const {name} = req.body;
    res.cookie()
  })

  .get('/', (req, res) => {
  res.render('home');
});

module.exports = {
  appRouter,
}