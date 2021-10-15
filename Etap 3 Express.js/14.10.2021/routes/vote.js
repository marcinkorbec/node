const express = require('express');
const voteRouter = express.Router();

const votes = {
  tak: 0,
  nie: 0,
}
console.log(votes);
voteRouter
  .get('/check', async (req, res) => {
    const info = Object.entries(votes).map(ar => `Głos na ${ar[0]}: ${ar[1]}`).join('<br>');
    res.send(info);
  })

  .get('/:voteName', async (req, res) => {
    const {voteName} = req.params;
    if (typeof votes[voteName] === 'undefined') {
      votes[voteName] = 0;
    }
    votes[voteName]++;
    res.send(`Dziękujemy za głos!`);

    console.log(votes);
  })

module.exports = {
  voteRouter,
}