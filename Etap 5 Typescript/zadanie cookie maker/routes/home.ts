import {CookieMakerApp} from "../index";
import {Request, Response, Router} from "express";
import {MyRouter} from "../types/my-router";
import {rest} from "../decorators/rest.decorator";
import {RestDecoratorInfo} from "../types/rest-decorator";


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

    @rest('get', '/home2')
    private home2 = (req: Request, res: Response): void => {
        res.send('It works!')
    }

    private setUpRoutes(): void {
        console.log(Reflect.get(this, '_restApiCall'))
        const ar: RestDecoratorInfo[] = Reflect.get(this, '_restApiCalls') ?? [];

        for (const apiOp of ar) {
            this.router[apiOp.httpMethod](apiOp.path, (this as any)[apiOp.propertyName]);
        }
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

