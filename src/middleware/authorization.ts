import { Response, Request, NextFunction } from 'express';
import { RoleI } from '../interfaces/roleI';

export const permit = (...permittedRoles: string[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.body.authUser) {
      for (let rol of req.body.authUser.roles) {
        if (permittedRoles.includes(rol.name))
          return next();
      }
      return res.status(401).json({ msg: 'You do not access!' });
    }
    return res.status(401).json({ msg: 'You do not access' });
  };
};


