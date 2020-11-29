import { PCurveI } from './../interfaces/pcurveI';
import { NextFunction, Request, Response } from 'express';
import * as pCurveModel from '../entitieses/pcurve';

export class PCurveController {
    public insert(req:Request, res:Response, next:NextFunction) {
        const pCurve : PCurveI = req.body;
        pCurveModel
            .insert(pCurve)
            .then( (data: any) => {
                return res.status(201 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        pCurveModel
            .get()
            .then((data:any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err: any) => {
                next(err);
            })
    }

    public update(req:Request, res:Response, next:NextFunction) {
        const id_as: number = parseInt(req.params.id_as);
        const id_pp : number = parseInt(req.params.id_pp);
        const id_scenario : number = parseInt(req.params.id_scenario);
        const t : number = req.body.t;
        const value : number = req.body.value;
        pCurveModel
            .update(value, id_as, id_scenario, id_pp, t)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public delete(req:Request, res:Response, next:NextFunction){
        const id_as: number = parseInt(req.params.id_as);
        const id_pp : number = parseInt(req.params.id_pp);
        const id_scenario : number = parseInt(req.params.id_scenario);
        const t : number = parseInt(req.params.t);
        pCurveModel
            .remove(id_as, id_pp, id_scenario, t)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }
}