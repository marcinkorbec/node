const express = require('express');
const taskRouter = express.Router();

taskRouter.get('/', (req, res) => {
  res.render('home');
});

module.exports = {
  taskRouter,
}