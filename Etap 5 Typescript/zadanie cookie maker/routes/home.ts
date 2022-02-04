import {CookieMakerApp} from "../index";
import {Request, Response, Router} from "express";
import {MyRouter} from "../types/my-router";
import {rest} from "../decorators/rest.decorator";


export class HomeRouter implements MyRouter {

    public readonly router: Router = Router();
    public readonly urlPrefix: string = '/';

    constructor(
        private cmapp: CookieMakerApp,
    ) {
        this.cmapp = cmapp;
        this.router = Router();
        this.setUpRoutes();
    }

    private setUpRoutes(): void {
        console.log(Reflect.get(this, '_restApiCall'))
        // this.router.get('/', this.home);
    }

    @rest('get', '/')
    private home = (req: Request, res: Response): void => {
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

