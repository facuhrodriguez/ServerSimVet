import { PathologyI } from './../interfaces/pathologyI';
import { Request, Response, NextFunction } from 'express';
import * as pathologyModel from '../models/pathology';

export class PathologyController {
    public insert(req:Request, res:Response, next: NextFunction) {
        const pat : PathologyI = req.body;
        pathologyModel
            .insert(pat)
            .then((data:any) => {
                return res.status(data.status || 201).json(data.payload)
            })
            .catch((err: any) => {
                next(err);
            })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        pathologyModel
            .get()
            .then((data:any) => {
                return res.status(data.status || 200).json(data.payload);
            })
            .catch((err: any) => {
                next(err);
            })
    }

    public update(req:Request, res:Response, next:NextFunction){
        const id_pat : number = parseInt(req.params.id_pat);
        const pat : PathologyI = req.body;
        pathologyModel
            .update(id_pat, pat)
            .then((data:any) => {
                return res.status(data.status || 200).json(data.payload);
            })
            .catch((err:any)=> {
                next(err);
            })
    }

    public delete(req:Request, res:Response, next:NextFunction) {
        const id_pat : number = parseInt(req.params.id_pat);
        pathologyModel
            .remove(id_pat)
            .then( (data:any) => {
                return res.status(data.status || 200).json(data.payload);
            })
            .catch((err:any)=>{
                next(err);
            })
    }


}