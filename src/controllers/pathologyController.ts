import { PathologyI } from './../interfaces/pathologyI';
import { Request, Response, NextFunction } from 'express';
import { PathologyService } from './../services/pathologyService';
export class PathologyController {
  public insert(req: Request, res: Response, next: NextFunction) {
    const pat: PathologyI = {
      name: req.body?.name,
      description: req.body?.description,
    };
    PathologyService.create(pat)
      .then((data: any) => {
        return res.status(data.status || 201).json(data);
      })
      .catch((err: any) => {
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
    PathologyService.findAll(query, orderBy, order, limit)
      .then((pathologies) => {
        return res.status(200).json(pathologies);
      })
      .catch((err) => {
        next(err);
      });
  }

  public updateById(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    const medicationData: PathologyI = {
      name: req.body?.name,
      description: req.body?.description,
    };

    PathologyService.updateById(id, medicationData)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    PathologyService.deleteById(id)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}
