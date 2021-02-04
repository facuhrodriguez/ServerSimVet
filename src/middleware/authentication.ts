import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

export const authentication = async (req: Request, res: Response, next: NextFunction) => {
  if ((req.headers && req.headers.authorization) || (req.query && req.query.access_token)) {
    let jwtToken: string = null;
    if (
      req.headers &&
      req.headers.authorization &&
      req.headers.authorization.split(' ')[0] === 'JWT'
    )
      jwtToken = req.headers.authorization.split(' ')[1];
    else if (req.query && req.query.access_token) jwtToken = req.query.access_token.toString();

    // Process JWT token (internal)
    if (jwtToken) {
      jwt.verify(jwtToken, process.env.JWT_SECRET, (err, decode: any) => {
        if (err) {
          req.body.authUser = undefined;
        }

        // Check if token is expired
        if (decode) {
          const now = Math.floor(Date.now() / 1000);
          if (!decode.exp || now > decode.exp) {
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
