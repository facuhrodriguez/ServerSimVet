import { PPperASI } from './../interfaces/ppPerAsI';
import * as ppPerAsModel from '../models/ppPerAs';
import { Request, Response, NextFunction } from 'express';


export class PpPerAsController {
    public insert(req: Request, res:Response, next:NextFunction) {
        const pp : PPperASI = req.body;
        ppPerAsModel
            .insert(pp)
            .then((data:any)=> {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        ppPerAsModel
            .get()
            .then((data:any) => {
                return res.status(200).json(data);
            })
            .catch((err:any)=> {
                next(err);
            })
    }

    public update(req:Request, res:Response, next:NextFunction){
        const id_as : number = parseInt(req.params.id_as);
        const pp : PPperASI = req.body.pp;
        ppPerAsModel
            .update(id_as, pp)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            });
    }

    public delete(req:Request, res:Response, next:NextFunction) {
        const id_as : number = parseInt(req.params.id_as);
        const id_pp : number = parseInt(req.params.id_pp);
        ppPerAsModel
            .remove(id_as, id_pp)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }
}