import { SimulationI } from '@interfaces/simulationI';
import { Request, Response, NextFunction } from 'express';
import * as simulationModel from "../entitieses/simulation";

export class SimulationController {
    public insert(req:Request, res:Response, next:NextFunction) {
        const sim : SimulationI = req.body.sim;
        simulationModel
            .insert(sim)
            .then((data:any) => {
                return res.status(201 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        simulationModel
            .get()
            .then((data:any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public update(req:Request, res:Response, next:NextFunction){
        const id_simulation : number = parseInt(req.params.id_simulation);
        const sim : SimulationI = req.body.sim;
        simulationModel
            .update(id_simulation, sim)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public delete(req:Request, res:Response, next:NextFunction) {
        const id_simulation : number = parseInt(req.params.id_simulation);
        simulationModel
            .remove(id_simulation)
            .then((data:any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }
}

