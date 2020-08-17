import { Request, Response, NextFunction } from 'express';
import { LoginI } from '../interfaces/loginI';
import { UserI } from '../interfaces/userI';

// Handling authentication.
import * as jwt from "jsonwebtoken";
import * as userModel from "../models/user";
import * as bcrypt from "bcryptjs";

// Handling errors.
import { LoginError } from '../errors/loginError';
import { RegisterError } from '../errors/registerError';


export class UserController {
  /**
   * This should be in a particular class (passport.ts)
   */
  SECRET_KEY = 'secretkey123456';
  expiresIn : number= 24*60*60;
  salt = bcrypt.genSaltSync(10);

  public login(req:Request, res:Response, next:NextFunction){
    let userData : LoginI;
    userData.email = req.body.email;
    userData.password = req.body.password;
    userModel
      .getById(userData.email)
      .then((data:any) => {
        if (data) {
          const resultPassword = bcrypt.compareSync(userData.password, data.password);
          if (resultPassword) {
            const access_token = jwt.sign({ id: data.id_user}, this.SECRET_KEY);
            return res.status(200).json(
              { id_user : data.id_user,
                email : data.email,
                access_token,
                expiresIn : this.expiresIn
              })
          } else {
            next(new LoginError());
          }
        } else {
          next(new LoginError());
        }
      })
      .catch((err:any) => {
        next(err);
      })
  }

  public register(req:Request, res:Response, next:NextFunction) {
    let userData : UserI;
    userData.email = req.body.email;
    userData.name = req.body.name;
    userData.surname = req.body.surname;
    userData.password = bcrypt.hashSync(req.body.password, this.salt);
    if (req.body.institution) {
      userData.institution = req.body.institution;
    }
    userModel
      .insert(userData)
      .then((data:any) => {
        return res.status(201 || data.status).json(data.payload);
      })
      .catch((err:any) => {
        next(new RegisterError);
      })
  }

  public update(req:Request, res:Response, next:NextFunction) {
    /**
     * Still have to update user email.
     */
    const email : string = req.params.email;
    let userData : UserI;
    userData.name = req.body.name;
    userData.surname = req.body.surname;
    userData.password = bcrypt.hashSync(req.body.password, this.salt);
    userModel
        .update(email, userData)
        .then( (data:any) => {
          return res.status(200 || data.status).json(data.payload);
        })
        .catch( (err:any) => {
          next(err);
        })
  }

  public delete(req:Request, res:Response, next:NextFunction) {
    const id_user : number = parseInt(req.params.id_user);
    userModel
      .remove(id_user)
      .then( (data:any) => {
        return res.status(200 || data.status).json(data.payload);
      })
      .catch( (err:any) => {
        next(err);
      })
  }
}