import {Request, Response} from "express";

export class ValidationError extends Error { }

export const handleError = (err: any, req: Request, res: Response, next: any): void => {
    console.error(err);

    res
        .status(err instanceof ValidationError ? 400 : 500)
        .render('error', {
            message: err instanceof ValidationError ? err.message : 'Przepraszamy, spróbuj ponownie za kilka minut.',
        })
};
