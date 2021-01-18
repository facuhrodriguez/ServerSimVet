import { SimulationService } from './../services/simulationService';
import { SimulationI } from '@interfaces/simulationI';
import { Request, Response, NextFunction } from 'express';

export class SimulationController {
  public findAll(req: Request, res: Response, next: NextFunction) {
    let query = {
      name: req.query?.name,
      description: req.query?.description,
    };
    const orderBy = req.query.orderBy ? req.query.orderBy : 'simulation.name';
    const order = req.query.order ? req.query.order : 'ASC';
    const limit: number = req.query.limit ? parseInt(req.query.limit.toString()) : 10;
    SimulationService.findAll(query, order, orderBy, limit)
      .then((simulations) => {
        return res.status(200).json(simulations);
      })
      .catch((err) => {
        next(err);
      });
  }

  public create(req: Request, res: Response, next: NextFunction) {
    let simulationData = {
      name: req.body?.name,
      description: req.body?.description,
      id_as: req.body?.id_as,
    };

    SimulationService.create(simulationData)
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  public deleteById(req: Request, res: Response, next: NextFunction) {
    const simulationId: number = parseInt(req.params.id);

    SimulationService.deleteById(simulationId)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  public updateById(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    const simulationData = {
      name: req.body.name,
      description: req.body?.description,
      id_as: req.body?.id_as,
    };

    SimulationService.update(id, simulationData)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}
