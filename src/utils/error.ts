import {Request, Response} from "express";

export class ValidationError extends Error {}

export const handleError = (err: Error, req: Request, res: Response) => {
    res
        .status(err instanceof ValidationError ? 400 : 500)
        .json(err instanceof ValidationError ? err.message : 'Sorry, try again later.');
};