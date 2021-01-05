import { ArrhythmiaI } from "@interfaces/arrhythmiaI";
import { Request, Response, NextFunction } from "express";
import { ArrhythmiaService } from "../services/arrhythmiaService";

export class ArrhythmiaController {
  public findAll(req: Request, res: Response, next: NextFunction) {
    let query = {
      name: req.query?.name,
      description: req.query?.description,
    };
    const orderBy = req.query.orderBy ? req.query.orderBy : "name";
    const order = req.query.order ? req.query.order : "ASC";
    const limit: number = req.query.limit
      ? parseInt(req.query.limit.toString())
      : 10;
    ArrhythmiaService.findAll(query, order, orderBy, limit)
      .then((arrhythmias) => {
        return res.status(200).json(arrhythmias);
      })
      .catch((err) => {
        next(err);
      });
  }
  public insert(req: Request, res: Response, next: NextFunction) {
    const arr: ArrhythmiaI = {
      name: req.body.name,
      description: req.body.description,
    };
    ArrhythmiaService.create(arr)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  public updateById(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    const arrhythmiaData: ArrhythmiaI = {
      name: req.body?.name,
      description: req.body?.description,
    };

    ArrhythmiaService.updateById(id, arrhythmiaData)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    ArrhythmiaService.deleteById(id)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}
