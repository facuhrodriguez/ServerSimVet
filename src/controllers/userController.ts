import { UserI } from './../interfaces/userI';
import { UserService } from './../services/userService';
import { Request, Response, NextFunction } from 'express';
import { LoginI } from '../interfaces/loginI';


export class UserController {

  public async login(req:Request, res:Response, next:NextFunction){
    let userData : LoginI;
    userData = {
      email : req.body.email,
      password: req.body.password
    };

    UserService.login(userData.email, userData.password).then((user) => {
      return res.status(200).json(user);
    })
    .catch((err) => {
      next(err);
    })
    
  }
  
  /**
   * Create an user
   * @param req 
   * @param res 
   * @param next 
   */
  public async register(req:Request, res:Response, next:NextFunction) {
    let userData: UserI;
    userData = {
      email: req.body.email,
      name: req.body.name,
      surname: req.body.surname,
      password: req.body.password,
      institution: req.body?.institution
    }

    UserService.register(userData).then((user) => {
      return res.status(200).json(user);
    })
    .catch((err) => {
      return res.status(500).json(err);
    })
  }
}