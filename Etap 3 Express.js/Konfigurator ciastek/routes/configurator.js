const express = require('express');
const configuratorRouter = express.Router();

configuratorRouter
    .get('/select-base/:baseName', (req, res) => {
        const {baseName} = req.params;
        console.log(baseName)
        res
            .cookie('cookie-base', baseName)
            .send('ok');
    });

module.exports = {
  configuratorRouter,
}