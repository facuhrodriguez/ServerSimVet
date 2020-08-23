import { ArrhythmiaI } from '@interfaces/arrhythmiaI';
import { Request, Response, NextFunction } from 'express';
import * as arrythmiaModel from "../models/arrhythmia";

export class ArrhythmiaController {
    public insert(req: Request, res: Response, next: NextFunction) {
        const arr : ArrhythmiaI = {
            name : req.body.name,
            description : req.body.description
        };
        arrythmiaModel
            .insert(arr)
            .then( (data) => {
                return res.status(200).json(data);
            })
            .catch( err => {
                next(err);
            });
    }

    public get (req: Request, res: Response, next: NextFunction) {
        arrythmiaModel
            .get()
            .then( data => {
                return res.status(200).json(data);
            })
            .catch( err => {
                next(err);
            });
    }

    public update (req: Request, res: Response, next: NextFunction) {
        const id_arr : number = parseInt(req.params.id_arr);
        const arr : ArrhythmiaI = req.body;
        if ( !arr) {
            next(new Error());
        }
        arrythmiaModel
            .update(id_arr, arr)
            .then( (data) => {
                return res.status(200).json(data);
            })
            .catch( err => {
                next(err);
            });
    }

    public delete (req : Request, res : Response, next : NextFunction) {
        const id_arr : number = parseInt(req.params.id_arr);
        arrythmiaModel
            .remove(id_arr)
            .then( (data) => {
                return res.status(200).json(data);
            })
            .catch( err => {
                next(err);
            });
    }
}
