const express = require('express');
const cookieRouter = express.Router();

cookieRouter
  .post('/set', (req, res) => {
    const {name} = req.body;
    res
      .cookie('name', name, {
        expires: new Date(2022, 09, 17),
      })
      .send('Zapisano imię.')
  })

  .get('/show', (req, res) => {
    const {name} = req.cookies;
    console.log(name);
    res.send(name)
  })
  .get('/check', (req, res) => {
    const {name} = req.cookies;

    if (typeof name === 'undefined') {
      res.send('Imię nie zostało zapisane!')
    } else {
      res.send(`Zapisane imię to: ${name}`);
      // res.send(name === undefined ? 'Brak imienia : name);
    }
  })

module.exports = {
  cookieRouter,
}