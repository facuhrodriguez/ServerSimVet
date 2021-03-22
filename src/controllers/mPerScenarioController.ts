import { MPerScenarioService } from './../services/mPerScenarioService';
import { Request, Response, NextFunction } from 'express';
export class MPerScenarioController {

  constructor() {}
  
  public create(req: Request, res: Response) {
    MPerScenarioService.create(req.body)
      .then((data) => {
        return res.status(201).json(data);
      })
      .catch((err) => {
        return res.status(500).json(err);
      });
  }
}
