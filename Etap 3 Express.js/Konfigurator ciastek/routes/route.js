const express = require('express');
const appRouter = express.Router();

appRouter.get('/', (req, res) => {
  res.render('home');
});

module.exports = {
  appRouter,
}