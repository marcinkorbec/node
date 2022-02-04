import {Request, Response, Router} from "express";
import {MyRouter} from "../types/my-router";
import {BaseRouter} from "./base";
import {get} from "../decorators/rest.decorator";


export class OrderRouter extends BaseRouter implements MyRouter {
    public readonly router: Router = Router();
    public readonly urlPrefix: string = '/';

    // private setUpRoutes(): void {
    //     this.router.get('/order/summary', this.summary);
    //     this.router.get('/order/thanks', this.thanks);
    // }

    @get('order/summary')
    private summary = (req: Request, res: Response) => {
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

    @get('order/thanks')
    private thanks = (req: Request, res: Response) => {
        const {sum} = this.cmapp.getCookieSettings(req);

        res
            .clearCookie('cookieBase')
            .clearCookie('cookieAddons')
            .render('order/thanks', {
                sum,
            });
    }

}
