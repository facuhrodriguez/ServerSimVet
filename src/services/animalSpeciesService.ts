import { AnimalSpeciesRepository } from './../repositories/animalSpeciesRepository';

export class AnimalSpeciesService  {


    static findAll(query: any) {
        return new Promise((resolve: any, reject: any) => {
            AnimalSpeciesRepository.findAll(query, query?.order, query?.orderBy, query?.limit)
                .then((arrhytmias: any) => {
                    resolve(arrhytmias);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    static create(animalSpecieData: any) {
        return new Promise((resolve: any, reject: any) => {
            AnimalSpeciesRepository.create(animalSpecieData)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }



}