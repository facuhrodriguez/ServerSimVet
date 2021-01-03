import { PhysiologicalParameterI } from './../interfaces/physiologicalParameterI';
import * as physiologicalP from '../entity/physiologicalParameter';
import { Request, Response, NextFunction} from 'express';

export class PhysiologicalParameter {
    public insert(req:Request, res:Response, next:NextFunction) {
        const pp : PhysiologicalParameterI = req.body;
        physiologicalP
            .insert(pp)
            .then((data:any) => {
                return res.status(data.status || 201).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        physiologicalP
            .get()
            .then((data:any) =>{
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public update(req:Request, res:Response, next:NextFunction) {
        const id_pp: number = parseInt(req.params.id_pp);
        const pp : PhysiologicalParameterI = req.body;
        physiologicalP
            .update(id_pp, pp)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public delete(req:Request, res:Response, next:NextFunction){
        const id_pp : number = parseInt(req.params.id_pp);
        physiologicalP
            .remove(id_pp)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }
}