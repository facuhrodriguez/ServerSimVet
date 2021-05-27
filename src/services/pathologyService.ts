import { PathologyRepository } from './../repositories/pathologyRepository';

export class PathologyService {
  static findAll(query: any, orderBy: any, order: any, limit: number) {
    return new Promise((resolve: any, reject: any) => {
      const _query = PathologyService.setUpQuery(query);
      PathologyRepository.findAll(_query, order, orderBy, limit)
        .then((pathologies: any) => {
          resolve(pathologies);
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
        });
    });
  }

  static deleteById(id: number) {
    return new Promise((resolve: any, reject: any) => {
      PathologyRepository.deleteById(id)
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
      PathologyRepository.updateById(id, medicationData)
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
