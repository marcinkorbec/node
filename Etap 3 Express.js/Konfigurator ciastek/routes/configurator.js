const express = require('express');
const { getAddonsFromReq } = require('../utils/get-addons-from-req')
const {COOKIE_ADDONS} = require("../data/cookie-data");
const configuratorRouter = express.Router();

configuratorRouter
    .get('/select-base/:baseName', (req, res) => {
        const {baseName} = req.params;
        res
            .cookie('cookieBase', baseName)
            .render('configurator/base-selected.hbs', {
                baseName,
            })
    })

    .get('/select-addon/:addonName', (req, res) => {
        const {addonName} = req.params;

        if(!COOKIE_ADDONS[addonName]) { //sprawdzanie czy taki dodatek już istnieje
            return res.render('errors/error.hbs', {
                description: `${addonName} nie istnieje w bazie!!!`
            });
        }

        const addons = getAddonsFromReq(req);

        if(addons.includes(addonName)) { //sprawdzanie zy dodatek został już dodany
            return res.render('errors/error.hbs', {
                description: `Dodatek ${addonName} został już dodany!!!`
            });
        }

        addons.push(addonName)
        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurator/add-ons.hbs', {
                addonName,
            })
    })

    .get('/delete-addon/:addonName', (req, res) => {
        const {addonName} = req.params;
        const addons = getAddonsFromReq(req).filter(addon => addon !== addonName);
        //addons.splice(addonName)
        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurator/deleted.hbs', {
                addonName,
            })
    });

module.exports = {
  configuratorRouter,
}