import { ScenarioPerSimulationI } from '@interfaces/scenarioPerSimulationI';
import { NextFunction, Request, Response } from 'express';
import * as scenarioPerSimulation from "../models/scenarioPerSimulation";

export class ScenarioPerSimulationController {
    public insert (req:Request, res:Response, next:NextFunction) {
        const sc : ScenarioPerSimulationI = req.body.sc;
        scenarioPerSimulation
            .insert(sc)
            .then((data:any) => {
                return res.status(data.status || 201).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public get(req:Request, res:Response, next:NextFunction) {
        scenarioPerSimulation
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
        const id_simulation : number = parseInt(req.params.id_simulation);
        scenarioPerSimulation
            .updateScenario(id_scenario, id_simulation)
            .then( (data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }

    public delete(req:Request, res:Response, next:NextFunction) {
        const id_scenario : number = parseInt(req.params.id_scenario);
        const id_simulation : number = parseInt(req.params.id_simulation);
        scenarioPerSimulation
            .remove(id_scenario, id_simulation)
            .then((data:any) => {
                return res.status(200 || data.status).json(data);
            })
            .catch((err:any) => {
                next(err);
            })
    }
}
