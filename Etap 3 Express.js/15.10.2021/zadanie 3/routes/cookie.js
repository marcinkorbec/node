const express = require('express');
const cookieRouter = express.Router();

cookieRouter
  .post('/set', (req, res) => {
    console.log(req.body);
    res.send('ok');
  });

module.exports = {
  cookieRouter,
}