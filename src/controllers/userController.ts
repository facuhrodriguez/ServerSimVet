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

  constructor() {
  }

  public async login(req:Request, res:Response, next:NextFunction){
    let userData : LoginI;
    userData = {
      email : req.body.email,
      password: req.body.password
    };
    const SECRET_KEY : string = 'secretkey123456';
    const expiresIn : number = 24*60*60 ;
    userModel
      .getById(userData.email)
      .then((data:any) => {
        if (data) {
          const resultPassword = userModel.comparePassword(userData.password, data.password);
          if (resultPassword) {
            const access_token = jwt.sign({ id: data.id_user}, SECRET_KEY);
            return res.status(200).json(
              { id_user : data.id_user,
                email : data.email,
                access_token: access_token,
                expiresIn : expiresIn
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
  
  /**
   * Create an user
   * @param req 
   * @param res 
   * @param next 
   */
  public async register(req:Request, res:Response, next:NextFunction) {

    const data : any = {};
    let userData : UserI;
    if (req.body.password) {
      data.password = await userModel.encryptPassword(req.body.password);
    }
    if (req.body.email) {
      data.email = req.body.email;
    }
    if (req.body.name) {
      data.name = req.body.name;
    }
    if (req.body.surname) {
      data.surname = req.body.surname;
    }
    if (req.body.institution) {
      data.institution = (req.body.institution) || 'null';
    }
    userData = {
      email : data.email,
      name : data.name,
      surname : data.surname,
      password : data.password,
      institution : data.institution, 
    };
    userModel
      .insert(userData)
      .then((data:any) => {
        return res.status(201 || data.status).json(data);
      })
      .catch((err:any) => {
        console.log(err);
        next(new RegisterError);
      })
  }

  /**
   * Update user data
   * @param req 
   * @param res 
   * @param next 
   */
  public update(req:Request, res:Response, next:NextFunction) {
    /**
     * Still have to update user email.
     */
    const id_user : number = parseInt(req.params.id_user);
    let data: any = {};
    let userData : UserI;
    data.name = req.body.name;
    data.surname = req.body.surname;
    data.password = req.body.password;
    data.institution = req.body.institution || null;
    userData = {
      email : null,
      name: data.name,
      surname : data.surname,
      password : data.password,
      institution : data.institution
    }
    userModel
        .update(id_user, userData)
        .then( (data:any) => {
          return res.status(200 || data.status).json(data);
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
        return res.status(200 || data.status).json(data);
      })
      .catch( (err:any) => {
        next(err);
      })
  }
}