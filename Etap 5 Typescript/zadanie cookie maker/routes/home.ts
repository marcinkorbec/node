import {CookieMakerApp} from "../index";
import {Request, Response, Router} from "express";


export class HomeRouter {
    public readonly router: Router = Router();
    public readonly urlPrefix = '/';

    constructor(
        private cmapp: CookieMakerApp,
    ) {
        this.cmapp = cmapp;
        this.router = Router();
        this.setUpRoutes();
    }

    private setUpRoutes(): void {
        this.router.get('/', this.home);
    }

    private home = (req: Request, res: Response) => {
        const {sum, addons, base, allBases, allAddons} = this.cmapp.getCookieSettings(req);

        res.render('home/index.hbs', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    }
}

