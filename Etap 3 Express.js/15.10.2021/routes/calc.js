const express = require('express');
const calcRouter = express.Router();

calcRouter
  .post('/check', (req, res) => {
    const {numberA, numberB} = req.body;
    // let divider;
    // if ((numberA % numberB) === 0) {
    //   divider = true;
    // } else {
    //   divider = false;
    // }

    const divider = numberA % numberB === 0? true : false;

    res.json({divider});
  })

module.exports = {
  calcRouter,
}