import { AnimalSpeciesService } from './../services/animalSpeciesService';
import { AnimalSpecieI } from '../interfaces/animalSpecieI';
import { Request, Response, NextFunction } from 'express';

export class AnimalSpeciesController {

    public create(req: Request, res:Response, next:NextFunction) {
        let as : AnimalSpecieI = {
            name : req.body.name
        }

        AnimalSpeciesService.create(as).then((animalSpecie) => {
            return res.status(200).json(animalSpecie);
        })
        .catch((err) => {
            next(err);
        })
    }

    public findAll(req: Request, res:Response, next:NextFunction) {
        let query = {};

        AnimalSpeciesService.findAll(query).then((animalSpecies: any) => {
            return res.status(200).json(animalSpecies);
        })
        .catch((err) => {
            next(err);
        });
    }
    // public insert(req : Request, res: Response, next: NextFunction) {
    //     let as : AnimalSpecieI = {
    //         name : req.body.name 
    //     }
    //     animalSpeciesModel
    //         .insert(as)
    //         .then( (data : QueryResult ) => {
    //             return res.status(200).json(data);
    //         })
    //         .catch( err => {
    //             next(err);
    //         });
    // }

    // public get (req : Request, res: Response, next:NextFunction)  {
    //     animalSpeciesModel
    //         .get()
    //         .then( data => {
    //             return res.status(200).json(data);
    //         })
    //         .catch( err => {
    //             next(err);
    //         });
    // }

    // public update (req : Request, res: Response, next: NextFunction) {
    //     const as : AnimalSpecieI = {
    //         name: req.body.name
    //     };
    //     const id_as : number = parseInt(req.params.id_as);
    //     animalSpeciesModel
    //         .update(id_as, as)
    //         .then( (data) => {
    //             return res.status(200).json(data);
    //         })
    //         .catch( err => {
    //             next(err);
    //         });
    // }

    // public delete (req : Request, res: Response, next: NextFunction)  {
    //     const id_as = parseInt(req.params.id_as);
    //     if (!id_as) {
    //         next(new Error());
    //     }
    //     animalSpeciesModel
    //         .remove(id_as)
    //         .then((data) => {
    //             return res.status(200).json(data);
    //         })
    //         .catch( err => {
    //             next(err);
    //         });
    // }
}