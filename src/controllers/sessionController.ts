import { SessionI } from '@interfaces/sessionI';
import * as sessionModel from "../entity/session";
import { Request, Response, NextFunction } from 'express';

export class SessionController {
    public insert(req:Request, res:Response, next:NextFunction) {
        const session : SessionI = req.body.session;
        sessionModel
            .insert(session)
            .then((data:any) => {
                return res.status(data.status || 201).json(data);
            })
            .catch((err:any) => {
                next(err);
           })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        sessionModel
            .get()
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public update(req:Request, res:Response, next:NextFunction) {
        const id_user : number = parseInt(req.params.id_user);
        const id_role : number = parseInt(req.params.id_role);
        sessionModel
            .updateRole(id_role, id_user)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public delete(req:Request, res:Response, next:NextFunction) {
        const id_user : number = parseInt(req.params.id_user);
        sessionModel
            .deleteUser(id_user)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }
}
