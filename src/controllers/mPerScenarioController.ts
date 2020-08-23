import { MPerScenarioI } from './../interfaces/mPerScenarioI';
import * as mPerScenarioModel from '../models/mPerScenario';
import { Request, Response, NextFunction} from 'express';

export class MPerScenarioController {
    public insert(req: Request, res: Response, next:NextFunction) {
        const mPerScenario : MPerScenarioI = req.body;
        mPerScenarioModel
            .insert(mPerScenario)
            .then ((med : any)=> {
                return res.status(med.status || 200).json(med.payload);
            })
            .catch( (err:any) => {
                next(err);
            })
    }

    public get(req: Request, res: Response, next:NextFunction) {
        mPerScenarioModel
            .get()
            .then((data: any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err: any) => {
                next(err);
            })
    }

    public update(req: Request, res: Response, next: NextFunction) {
        const mPerScenario : MPerScenarioI = req.body;
        const id_scenario : number = parseInt(req.params.id_scenario);
        const id_medication : number = parseInt(req.params.id_medication);
        mPerScenarioModel
            .update(mPerScenario, id_scenario, id_medication)
            .then((data: any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err:any) =>{
                next(err);
            });
    }

    public delete(req:Request, res:Response, next:NextFunction) {
        const id_scenario : number = parseInt(req.params.id_scenario);
        const id_medication : number = parseInt(req.params.id_medications);
        mPerScenarioModel
            .remove(id_scenario, id_medication)
            .then((data:any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err: any) => {
                next(err);
            })
    }


}
