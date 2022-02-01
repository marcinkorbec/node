import { COOKIE_ADDONS, COOKIE_BASES } from "../data/cookie-data";
import {Request, Response, Router} from "express";
import {CookieMakerApp} from "../index";

export class ConfiguratorRouter {
    public readonly router: Router = Router();

    constructor(
        private cmapp: CookieMakerApp
    ) {
        this.router = Router();
        this.setUpRoutes();
    }

    private setUpRoutes() {
        this.router.get('/select-base/:baseName', this.selectBase);
        // this.router.get('/select-addon/:addonName', this.addAddon);
        // this.router.get('/delete-addon/:addonName', this.deleteAddon);
    }

     private selectBase = (req: Request, res: Response) => {
        const {baseName} = req.params;

        // if(!this.cmapp.data.COOKIE_BASES[baseName]) {
        //     return this.cmapp.renderError(res, 'Wybrałeś bazę, która nie istnieje!')
        // }

        else {
            res
                .cookie('cookieBase', baseName)
                .render('configurator/base-selected.hbs', {
                    baseName,
                })
        }
    }

    addAddon = (req: Request, res:Response) => {
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

    deleteAddon = (req: Request, res: Response) => {
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