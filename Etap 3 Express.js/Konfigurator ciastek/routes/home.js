const express = require('express');
const homeRouter = express.Router();

homeRouter

  .get('/', (req, res) => {
    res.render('home/index.hbs', {
      cookie: {
        base: 'light',
        addons: ['coconut'],
      },
    });
  });

module.exports = {
  homeRouter,
}