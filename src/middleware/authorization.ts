import { Response, Request, NextFunction } from 'express';

export const permit = (...permittedRoles: any[]) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (req.body.authUser) {
      if (permittedRoles.includes(req.body.authUser.role)) {
        return next();
      }
      return res.status(401).json({ msg: 'You do not access!' });
    }
    return res.status(401).json({ msg: 'You do not access' });
  };
};

module.exports = permit;
