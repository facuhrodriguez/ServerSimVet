import { PathologyRepository } from './../repositories/PathologyRepository';

export class PathologyService  {


    static findAll(query: any) {
        return new Promise((resolve: any, reject: any) => {
            PathologyRepository.findAll(query, query?.order, query?.orderBy, query?.limit)
                .then((arrhytmias: any) => {
                    resolve(arrhytmias);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    static create(patData: any) {
        return new Promise((resolve: any, reject: any) => {
            PathologyRepository.create(patData)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }



}