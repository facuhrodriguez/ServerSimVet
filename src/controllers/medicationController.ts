import { MedicationI } from '../interfaces/medicationI';
import { Request, Response, NextFunction } from 'express';
import { MedicationService } from '../services/medicationService';

export class MedicationController {

    public create(req: Request, res:Response, next:NextFunction) {
        const med: MedicationI = {
            name: req.body.name,
            description: req.body?.description,
        }

        MedicationService.create(med).then((medication) => {
            return res.status(200).json(medication);
        })
        .catch((err) => {
            next(err);
        })

    }
  
    public findAll(req: Request, res:Response, next:NextFunction) {
        let query = {};

        MedicationService.findAll(query).then((medications) => {
            return res.status(200).json(medications);
        })
        .catch((err) => {
            next(err);
        })
    }
}
