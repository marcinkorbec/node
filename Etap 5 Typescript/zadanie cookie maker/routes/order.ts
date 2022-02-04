import {Request, Response} from "express";
import {MyRouter} from "../types/my-router";
import {BaseRouter} from "./base";
import {get} from "../decorators/rest.decorator";


export class OrderRouter extends BaseRouter implements MyRouter {

    @get('/order/summary')
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

    @get('/order/thanks')
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
