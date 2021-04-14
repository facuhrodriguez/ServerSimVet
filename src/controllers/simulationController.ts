import { SimulationService } from './../services/simulationService';
import { SimulationI } from '../interfaces/simulationI';
import { Request, Response, NextFunction } from 'express';

export class SimulationController {
  public findAll(req: Request, res: Response, next: NextFunction) {
    SimulationService.findAll(req.query)
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
      animalSpecie: req.body?.animalSpecie,
      scenarios: req.body?.scenarios,
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
    const id = parseInt(req.params.id_simulation);

    const simulationData = {
      name: req.body.name,
      description: req.body?.description,
      animalSpecie: req.body?.animalSpecie,
      scenarios: req.body?.scenarios,
    };

    SimulationService.update(id, simulationData)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  public getSimulationsFromScenario(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id_scenario);

    SimulationService.findAll({ scenario: id })
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((error: any) => {
        return res.status(500).json(error);
      });
  }
}
