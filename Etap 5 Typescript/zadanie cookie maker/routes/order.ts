import {Request, Response, Router} from "express";
import {CookieMakerApp} from "../index";
import {MyRouter} from "../types/my-router";


function getCookieSettings() {};

export class OrderRouter implements MyRouter{
    public readonly router: Router = Router();
    static readonly urlPrefix = '/';

    constructor(
        private cmapp: CookieMakerApp,
    ) {
        this.cmapp = cmapp;
        this.router = Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router.get('/order/summary', this.summary);
        this.router.get('/order/thanks', this.thanks);
    }

    summary = (req: Request, res: Response) => {
        const {sum, addons, base, allBases, allAddons} = this.cmapp.getCookieSettings(req);

        res.render('order/summary', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    };

    thanks = (req: Request, res: Response) => {
        const {sum} = this.cmapp.getCookieSettings(req);

        res
            .clearCookie('cookieBase')
            .clearCookie('cookieAddons')
            .render('order/thanks', {
                sum,
            });
    }

}
