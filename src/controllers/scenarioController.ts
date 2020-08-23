import { ScenarioI } from '@interfaces/scenarioI';
import * as scenariosModel from '../models/scenario';
import { Response, Request, NextFunction } from 'express';

export class ScenarioController {
    public insert(req:Request, res:Response, next:NextFunction) {
        const scenario : ScenarioI = req.body;
        console.log(scenario);
        scenariosModel
            .insert(scenario)
            .then((data:any)=> {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        scenariosModel
            .get()
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public update(req:Request, res:Response, next:NextFunction) {
        const id_scenario : number = parseInt(req.params.id_scenario);
        const scenario : ScenarioI = req.body;
        scenariosModel
            .update(id_scenario, scenario)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err: any) => {
                next(err);
            })
    }

    public delete(req: Request, res:Response, next:NextFunction) {
        const id_scenario : number = parseInt(req.params.id_scenario);
        scenariosModel
            .remove(id_scenario)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }
}
