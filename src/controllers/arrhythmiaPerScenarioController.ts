import { ArrhythmiaPerScenarioI } from '@interfaces/arrhythmiaPerScenarioI';
import { Request, Response, NextFunction } from 'express';
import { ArrhythmiaPerScenarioModel } from "../models/arrhythmiaPerScenario";

export class ArrhythmiaPerScenarioController {

    public insert (req: Request,res: Response, next: NextFunction) {
        const arr : ArrhythmiaPerScenarioI = req.body;
        ArrhythmiaPerScenarioModel
        .insert(arr)
        .then( (data) => {
            return res.status(200).json(data);
        })
        .catch( err => {
            next(err);
        })
    }

    public get (req : Request, res: Response, next: NextFunction) {
        ArrhythmiaPerScenarioModel
        .findAll()
        .then( data => {
            return res.status(200).json(data);
        })
        .catch( err => {
            next(err);
        })

    }

    public delete (req: Request, res: Response, next: NextFunction) {
        const id_arr : number = parseInt(req.params.id_arr);
        const id_scenario : number = parseInt(req.params.id_scenario)
        ArrhythmiaPerScenarioModel
        .delete(id_arr, id_scenario)
        .then( (data) => {
            return res.status(200).json(data);
        })
        .catch( err => {
            next(err);
        })
    }
}

