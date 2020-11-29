import { ArrhythmiaRepository } from './../repositories/arrhythmiaRepository';
export class ArrhythmiaService  {


    static findAll(query: any) {
        return new Promise((resolve: any, reject: any) => {
            ArrhythmiaRepository.findAll(query, query?.order, query?.orderBy, query?.limit)
                .then((arrhytmias: any) => {
                    resolve(arrhytmias);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    static create(arrhythmiaData: any) {
        return new Promise((resolve: any, reject: any) => {
            ArrhythmiaRepository.create(arrhythmiaData)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }



}