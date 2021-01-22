import { ScenarioService } from './../services/scenarioService';
import { ScenarioI } from '@interfaces/scenarioI';
import { Response, Request, NextFunction } from 'express';

export class ScenarioController {
  public create(req: Request, res: Response, next: NextFunction) {
    const scenario: ScenarioI = {
      name: req.body.name,
      description: req.body?.description,
    };
    ScenarioService.create(scenario)
      .then((data: any) => {
        return res.status(200).json(data);
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
    const orderBy = req.query.orderBy ? req.query.orderBy : 's.name';
    const order = req.query.order ? req.query.order : 'ASC';
    const limit: number = req.query.limit ? parseInt(req.query.limit.toString()) : 10;
    ScenarioService.findAll(query, order, orderBy, limit)
      .then((data: any) => {
        return res.status(200).json(data);
      })
      .catch((err: any) => {
        next(err);
      });
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    ScenarioService.deleteById(id)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  public updateById(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    const scenarioData: ScenarioI = {
      name: req.body.name,
      description: req.body?.description,
    };

    ScenarioService.updateById(id, scenarioData)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}
