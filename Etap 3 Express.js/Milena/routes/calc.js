const express = require('express');

const calcRouter = express.Router();

calcRouter
    .post('/calc/check', (req, res) => {
        console.log(req.body);
        res.json({ ok: true })
    })


module.exports = {
    calcRouter,
}