import { MedicationRepository } from './../repositories/medicationRepository';

export class MedicationService  {

    static findAll(query: any) {
        return new Promise((resolve: any, reject: any) => {
            MedicationRepository.findAll(query, query?.order, query?.orderBy, query?.limit)
                .then((medications: any) => {
                    resolve(medications);
                })
                .catch((err: any) => {
                    reject(err);
                });
        });
    }

    static create(medicationData: any) {
        return new Promise((resolve: any, reject: any) => {
            MedicationRepository.create(medicationData)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }



}