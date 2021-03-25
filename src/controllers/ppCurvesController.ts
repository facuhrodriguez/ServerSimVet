import { Request, Response } from 'express';
import { PPcurveService } from '../services/ppcurvesService';

export class PPCurvesController {
  constructor() {}

  public findAll(req: Request, res: Response) {
    PPcurveService.findAll(req.query)
      .then((curves: any) => {
        return res.status(200).json(curves);
      })
      .catch((error: any) => {
        return res.status(500).json(error);
      });
  }
}
