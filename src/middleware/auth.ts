import { NextFunction, Request, Response } from 'express';
import { AuthError } from "../errors/authError";

export const isAuth = (req:Request, res:Response, next:NextFunction) => {
    const bearerHeader = req.headers.authorization;
        if (typeof bearerHeader !== 'undefined') {
            const bearer = bearerHeader.split(" ");
            const bearerToken = bearer[1];
            req.headers.authorization = bearerToken;
            return next();
        } else {
            return res.status(401).json('You do not access!')
        }
}
