import { UserI } from './../interfaces/userI';
import { UserService } from './../services/userService';
import { Request, Response, NextFunction } from 'express';
import { LoginI } from '../interfaces/loginI';



export class UserController {
  public login(req: Request, res: Response, next: NextFunction) {
    let userData: LoginI;
    userData = {
      email: req.body.email,
      password: req.body.password,
    };
    UserService.login(userData.email, userData.password)
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch((err) => {
        // next(err);
        return res.status(err.status ? err.status : 500).json(err.msg);
      });
  }
  public user(req: Request, res: Response, next: NextFunction) {
    let userEmail = req.params.email;
    let query = {
      email: req.query?.email,
      id_user: req.query?.id_user
    }

    UserService.findOneByEmail(query.email)
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch((err) => {
        return res.status(err.status).json(err.msg);
      })
  }

  /**
   * Create an user
   * @param req
   * @param res
   * @param next
   */
  public register(req: Request, res: Response, next: NextFunction) {
    let userData: UserI;
    userData = {
      email: req.body.email,
      name: req.body.name,
      surname: req.body.surname,
      password: req.body.password,
      institution: req.body?.institution,
      roles: req.body?.role,
    };
    UserService.register(userData)
      .then((user) => {
        return res.status(200).json(user);
      })
      .catch((err) => {
        next(err);
      });
  }
}
