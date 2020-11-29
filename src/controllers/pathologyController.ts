import { PathologyI } from './../interfaces/pathologyI';
import { Request, Response, NextFunction } from 'express';
import { PathologyService } from './../services/pathologyService';
export class PathologyController {
    public insert(req:Request, res:Response, next: NextFunction) {
        const pat : PathologyI = {
            name: req.body?.name,
            description: req.body.description
        }
        PathologyService
            .create(pat)
            .then((data:any) => {
                return res.status(data.status || 201).json(data)
            })
            .catch((err: any) => {
                next(err);
            })
    }

    public findAll(req:Request, res:Response, next:NextFunction) {
        let query = {};
        PathologyService
            .findAll(query)
            .then((data:any) => {
                return res.status(data.status || 200).json(data);
            })
            .catch((err: any) => {
                next(err);
            })
    }
}