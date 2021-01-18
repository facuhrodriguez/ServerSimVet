import { MedicationI } from '../interfaces/medicationI';
import { Request, Response, NextFunction } from 'express';
import { MedicationService } from '../services/medicationService';

export class MedicationController {
  public create(req: Request, res: Response, next: NextFunction) {
    const med: MedicationI = {
      name: req.body.name,
      description: req.body?.description,
    };

    MedicationService.create(med)
      .then((medication) => {
        return res.status(200).json(medication);
      })
      .catch((err) => {
        next(err);
      });
  }

  public findAll(req: Request, res: Response, next: NextFunction) {
    let query = {
      name: req.query?.name,
      description: req.query?.description,
    };
    const orderBy = req.query.orderBy ? req.query.orderBy : 'name';
    const order = req.query.order ? req.query.order : 'ASC';
    const limit: number = Number(req.query.limit);
    MedicationService.findAll(query, orderBy, order, limit)
      .then((medications) => {
        return res.status(200).json(medications);
      })
      .catch((err) => {
        next(err);
      });
  }

  public updateById(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    const medicationData: MedicationI = {
      name: req.body?.name,
      description: req.body?.description,
    };

    MedicationService.updateById(id, medicationData)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    MedicationService.deleteById(id)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}
