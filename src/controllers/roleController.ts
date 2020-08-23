import * as roleModel from '../models/role';
import { Response, Request, NextFunction } from 'express';
import { RoleI } from '../interfaces/roleI';

export class RoleController {
    public insert(req:Request, res:Response, next:NextFunction) {
        const role : RoleI = req.body.role;
        roleModel
            .insert(role)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        roleModel
            .get()
            .then((data:any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public update(req:Request, res:Response, next:NextFunction) {
        const id_role : number = parseInt(req.params.id_role);
        const role : RoleI = req.body.role;
        roleModel
            .update(id_role, role)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public delete(req:Request, res:Response, next:NextFunction){
        const id_role : number = parseInt(req.params.id_role);
        roleModel
            .remove(id_role)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            });
    }
}
