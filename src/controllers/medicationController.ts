import { MedicationI } from '../interfaces/medicationI';
import { Request, Response, NextFunction } from 'express';
import * as medicationModel from "../models/medication";

export class MedicationController {
    public insert (req : Request, res : Response, next: NextFunction) {
        const med : MedicationI = req.body;
        medicationModel
            .insert(med)
            .then( (data) => {
                return res.status(200).json(data);
            })
            .catch((err:any)=> {
                next(err);
            });
    }

    public get (req : Request, res: Response, next : NextFunction) {
        medicationModel
            .get()
            .then(data => {
                return res.status(200).send(data);
            })
            .catch(err => {
                next(err);
            });
    }

    public delete (req: Request, res: Response, next: NextFunction) {
        const id_med = parseInt(req.params.id_med);
        medicationModel
            .remove(id_med)
            .then( (data) => {
                return res.status(200).json(data);
            })
            .catch( err => {
                next(err);
            })
    }

    public update (req : Request, res : Response, next : NextFunction) {
        const id_med :number= parseInt(req.params.id_med);
        const med : MedicationI = req.body;
        medicationModel
            .update(id_med, med)
            .then( (data) => {
                return res.status(200).json(data);
            })
            .catch( err => {
                next(err);
            })
    }

}
