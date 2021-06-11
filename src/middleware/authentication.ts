import { environment } from './../env/environment';
import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  if ((req.headers && req.headers.authorization) || (req.query && req.query.access_token)) {
    let jwtToken: string = "";
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'Bearer'
    ) jwtToken = req.headers.authorization.split(' ')[1];

    // Process JWT token
    if (jwtToken) {
      jwt.verify(jwtToken, environment.JWT.JWT_SECRET, (err, decode: any) => {
        if (err) {
          req.body.authUser = undefined;
          next();
        }
        // Check if token is expired
        if (decode) {
          const now = Date.now();
          if (!decode.expiresIn || now > decode.expiresIn * 1000) {
            req.body.authUser = undefined;
            return next();
          }
          req.body.authUser = decode.user;
          return next();
        }
        return res.status(401).json('You do not access!');
      });
    } else {
      req.body.authUser = undefined;
      next();
    }
  } else {
    next();
  }
};
