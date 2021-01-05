import { AnimalSpeciesService } from "./../services/animalSpeciesService";
import { AnimalSpecieI } from "../interfaces/animalSpecieI";
import { Request, Response, NextFunction } from "express";

export class AnimalSpeciesController {
  public create(req: Request, res: Response, next: NextFunction) {
    let as: AnimalSpecieI = {
      name: req.body.name,
      description: req.body?.description
    };

    AnimalSpeciesService.create(as)
      .then((animalSpecie) => {
        return res.status(200).json(animalSpecie);
      })
      .catch((err) => {
        next(err);
      });
  }

  public findAll(req: Request, res: Response, next: NextFunction) {
    let query = {
      name: req.query?.name,
      description: req.query?.description
    }
    const orderBy = req.query.orderBy ? req.query.orderBy : 'name';
    const order = req.query.order ? req.query.order : 'ASC';
    const limit : number = req.query.limit ? parseInt(req.query.limit.toString()) : 10;
    
    AnimalSpeciesService.findAll(query, order, orderBy, limit)
      .then((animalSpecies: any) => {
        return res.status(200).json(animalSpecies);
      })
      .catch((err) => {
        next(err);
      });
  }

  public delete(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    AnimalSpeciesService.deleteById(id)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }

  public updateById(req: Request, res: Response, next: NextFunction) {
    const id = parseInt(req.params.id);

    const animalSpeciesData: AnimalSpecieI = {
      name: req.body.name,
      description: req.body?.description,
    };

    AnimalSpeciesService.updateById(id, animalSpeciesData)
      .then((data) => {
        return res.status(200).json(data);
      })
      .catch((err) => {
        next(err);
      });
  }
}
