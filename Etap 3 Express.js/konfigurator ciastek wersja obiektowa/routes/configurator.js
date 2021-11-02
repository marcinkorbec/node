const express = require('express');
const { COOKIE_ADDONS, COOKIE_BASES } = require("../data/cookie-data");

class ConfiguratorRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = express.Router();
        this.selectBase();
        this.selectAddon();
        this.deleteAddon();
    }

    selectBase = () => {
    this.router.get('/select-base/:baseName', (req, res) => {
        console.log(this)
        const {baseName} = req.params;

            if(!COOKIE_BASES[baseName]) {
                return this.cmapp.renderError(res, 'Wybrałeś bazę, która nie istnieje!')
            } else {
                res
                    .cookie('cookieBase', baseName)
                    .render('configurator/base-selected.hbs', {
                        baseName,
                    })
            }
        })
    }

    selectAddon = () => {
    this.router.get('/select-addon/:addonName', (req, res) => {
            const {addonName} = req.params;
            const addons = getAddonsFromReq(req);

            if(!COOKIE_ADDONS[addonName]) { //sprawdzanie czy taki dodatek już istnieje
                return this.cmapp.renderError(res, `Składnik ${addonName} został wybrany`);
            } else if (addons.includes(addonName)) { //sprawdzanie czy dodatek został już dodany
                return this.cmapp.renderError(res, `Składnik ${addonName} został już wybrany`);
            } else { addons.push(addonName)
                res
                    .cookie('cookieAddons', JSON.stringify(addons))
                    .render('configurator/add-ons.hbs', {
                        addonName,
                    })
            }
        })
    }

    deleteAddon = () => {
    this.router.get('/delete-addon/:addonName', (req, res) => {
            const {addonName} = req.params;
            const oldAddons = getAddonsFromReq(req);

            if (!oldAddons.includes(addonName)) {
                return this.cmapp.renderError(res, 'Próbujesz usunąć dodatek, który nie był dodany!')
            } else {
                const addons = getAddonsFromReq(req).filter(addon => addon !== addonName);
                res
                    .cookie('cookieAddons', JSON.stringify(addons))
                    .render('configurator/deleted.hbs', {
                        addonName,
                    })
            }
        });
    }
}


module.exports = {
    ConfiguratorRouter,
}