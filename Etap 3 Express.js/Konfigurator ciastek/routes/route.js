const express = require('express');
const appRouter = express.Router();

app.get('/', (req, res) => {
  res.send('home');
});

module.exports = {
  appRouter,
}