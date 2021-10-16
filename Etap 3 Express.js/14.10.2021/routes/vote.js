const express = require('express');
const voteRouter = express.Router();
const {IpRestrict} = require('../util/restrict');

const votes = {
  tak: 0,
  nie: 0,
}

const ipRestrict = new IpRestrict();

voteRouter
  .get('/check', async (req, res) => {
    const info = Object.entries(votes).map(ar => `Głos na ${ar[0]}: ${ar[1]}`).join('<br>');
    res.send(info);
  })

  .get('/:voteName', async (req, res) => {
    if (!ipRestrict.check(req.ip)) {
      res.status(403).send('Głos oddano już wcześniej!')
    }
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