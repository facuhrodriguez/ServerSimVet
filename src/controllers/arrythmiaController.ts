import { ArrhythmiaI } from '@interfaces/arrhythmiaI';
import { Request, Response, NextFunction } from 'express';
import {ArrhythmiaService} from "../services/arrhythmiaService";

export class ArrhythmiaController {

    public findAll(req: Request, res:Response, next: NextFunction) {
        let query = {};
        ArrhythmiaService
            .findAll(query)
            .then((arrhythmias) => {
                return res.status(200).json(arrhythmias);
            })
            .catch((err) => {
                next(err);
            })
    }
    public insert(req: Request, res: Response, next: NextFunction) {
        const arr : ArrhythmiaI = {
            name : req.body.name,
            description : req.body.description
        };
        ArrhythmiaService
            .create(arr)
            .then( (data) => {
                return res.status(200).json(data);
            })
            .catch( err => {
                next(err);
            });
    }

}
