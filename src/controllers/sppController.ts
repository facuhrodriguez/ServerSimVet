import { SppI } from '@interfaces/sppI';
import * as sppModel from "../entitieses/spp";
import { Request, Response, NextFunction } from 'express';

export class SppController {
    public insert(req:Request, res:Response, next:NextFunction) {
        const spp : SppI = req.body.spp;
        sppModel
            .insert(spp)
            .then((data:any) => {
                return res.status(201 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        sppModel
            .get()
            .then((data:any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public update(req:Request, res:Response, next:NextFunction){
        const id_as : number = parseInt(req.params.id_as);
        const id_pp : number = parseInt(req.params.id_pp);
        const id_simulation : number = parseInt(req.params.id_simulation);
        sppModel
            .updateScenario(id_as, id_pp,id_simulation)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public delete(req:Request, res:Response, next:NextFunction) {
        const id_as : number = parseInt(req.params.id_as);
        const id_pp : number = parseInt(req.params.id_pp);
        const id_simulation : number = parseInt(req.params.id_simulation);
        sppModel
            .remove(id_pp, id_as, id_simulation)
            .then((data:any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }
}

