 // import { unlink } from ('fs').promises;
//
// export (async function () {
//     const oldFile: string = process.argv[2];
//     try {
//         await unlink(oldFile)
//     } catch (e) {
//         if (e.code === 'ENOENT') {
//             console.log(`${oldFile} does not exist.`);
//         } else {
//             console.log('Unknown error:', e);
//         }
//     }
// })();

import {NextFunction, Request, Response, RequestHandler} from "express";

function catchAsync(fn: (req: Request, res: Response, next: NextFunction) => Promise<void | Response> ): RequestHandler {
    return (req: Request, res: Response, next: NextFunction) => {
        fn(req, res, next).catch((err:Error) => next(err));
    }
};