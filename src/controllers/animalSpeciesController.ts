import { AnimalSpeciesService } from "./../services/animalSpeciesService";
import { AnimalSpecieI } from "../interfaces/animalSpecieI";
import { Request, Response, NextFunction } from "express";

export class AnimalSpeciesController {
  public create(req: Request, res: Response, next: NextFunction) {
    let as: AnimalSpecieI = {
      name: req.body.name,
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
    let query = {};

    AnimalSpeciesService.findAll(query)
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
}
