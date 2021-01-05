import { AnimalSpeciesRepository } from "./../repositories/animalSpeciesRepository";

export class AnimalSpeciesService {
  static findAll(query: any, order: any, orderBy: any, limit: number) {
    return new Promise((resolve: any, reject: any) => {
      const _query = AnimalSpeciesService.setUpQuery(query);
      AnimalSpeciesRepository.findAll(_query, order, orderBy, limit)
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
        });
    });
  }

  static deleteById(id: number) {
    return new Promise((resolve: any, reject: any) => {
      AnimalSpeciesRepository.deleteById(id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static updateById(id: number, animalSpecieData: any) {
    return new Promise((resolve: any, reject: any) => {
      AnimalSpeciesRepository.updateById(id, animalSpecieData)
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
