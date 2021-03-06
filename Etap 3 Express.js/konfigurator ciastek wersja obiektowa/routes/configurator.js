const express = require('express');
const { COOKIE_ADDONS, COOKIE_BASES } = require("../data/cookie-data");

class ConfiguratorRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = express.Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/select-base/:baseName', this.selectBase);
        this.router.get('/select-addon/:addonName', this.addAddon);
        this.router.get('/delete-addon/:addonName', this.deleteAddon);
    }

    selectBase = (req, res) => {
        const {baseName} = req.params;

            if(!this.cmapp.data.COOKIE_BASES[baseName]) {
                return this.cmapp.renderError(res, 'Wybrałeś bazę, która nie istnieje!')
            } else {
                res
                    .cookie('cookieBase', baseName)
                    .render('configurator/base-selected.hbs', {
                        baseName,
                    })
            }
    }

    addAddon = (req, res) => {
        const {addonName} = req.params;

        if(!this.cmapp.data.COOKIE_ADDONS[addonName]) { //sprawdzanie czy taki dodatek już istnieje
            return this.cmapp.renderError(res, `Składnik ${addonName} został wybrany`);
        }

        const addons = this.cmapp.getAddonsFromReq(req);

        if (addons.includes(addonName)) { //sprawdzanie czy dodatek został już dodany
            return this.cmapp.renderError(res, `Składnik ${addonName} został już wybrany`);
        }
        addons.push(addonName)
            res
                .cookie('cookieAddons', JSON.stringify(addons))
                .render('configurator/add-ons.hbs', {
                    addonName,
                });

    };

    deleteAddon = (req, res) => {
        const {addonName} = req.params;
        const oldAddons = this.cmapp.getAddonsFromReq(req);


        if (!oldAddons.includes(addonName)) {
                return this.cmapp.renderError(res, 'Próbujesz usunąć dodatek, który nie był dodany!')
        }

        const addons = oldAddons.filter(addon => addon !== addonName);
        res
            .cookie('cookieAddons', JSON.stringify(addons))
            .render('configurator/deleted.hbs', {
                addonName,
            })
        }
}


module.exports = {
    ConfiguratorRouter,
}