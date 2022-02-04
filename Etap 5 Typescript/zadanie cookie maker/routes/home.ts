import {Request, Response, Router} from "express";
import {MyRouter} from "../types/my-router";
import {rest} from "../decorators/rest.decorator";
import {BaseRouter} from "./base";


export class HomeRouter extends BaseRouter implements MyRouter {

    @rest('get', '/home2')
    private home2 = (req: Request, res: Response): void => {
        res.send('It works!')
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

