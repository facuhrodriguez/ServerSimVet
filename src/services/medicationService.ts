import { MedicationRepository } from './../repositories/medicationRepository';

export class MedicationService  {

    static findAll(query: any) {
        const _query = MedicationService.setUpQuery(query);
        return new Promise((resolve: any, reject: any) => {
            MedicationRepository.findAll(_query, query?.order, query?.orderBy, query?.limit)
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

    static deleteById(id: number) {
        return new Promise((resolve: any, reject: any) => {
          MedicationRepository.deleteById(id)
            .then((data) => {
              resolve(data);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }
    
      static updateById(id: number, medicationData: any) {
        return new Promise((resolve: any, reject: any) => {
            MedicationRepository.updateById(id, medicationData)
            .then((data) => {
              resolve(data.raw);
            })
            .catch((err) => {
              reject(err);
            });
        });
      }

    static setUpQuery(query: any) {
        const where: any = {};
    
        if (query.name) where.name = query.name;
    
        if (query.description) where.description = query.description;
    
        return where;
      }

}