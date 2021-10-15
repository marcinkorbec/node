const express = require('express');
const voteRouter = express.Router();

let votesOnYes = 0;
let votesOnNo = 0;

voteRouter
  .get('/yes', (req, res) => {
    votesOnYes++;
    res.send('Dziękujemy za głos!');
  })

  .get('/no', (req, res) => {
    votesOnNo++;
    res.send('Dziękujemy za głos!')
  })

  .get('/check', (req, res) => {
    res.send(`<p>Głosy na tak: ${votesOnYes}, głosy na nie: ${votesOnNo}.</p>`)
  })

module.exports = {
  voteRouter,
}