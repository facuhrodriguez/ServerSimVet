
import * as arrhythmiaModel from '../models/arrhythmia';

export class ArrhythmiaService  {


    static findAll(query: any) {
        return new Promise((resolve: any, reject: any) => {
            arrhythmiaModel.findAll(query)
                .then((arrhytmias: any) => {
                    resolve(arrhytmias);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }



}