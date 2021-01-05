import { ArrhythmiaRepository } from "./../repositories/arrhythmiaRepository";
export class ArrhythmiaService {
  static findAll(query: any, order: any, orderBy: any, limit: number) {
    return new Promise((resolve: any, reject: any) => {
        const _query = ArrhythmiaService.setUpQuery(query);
      ArrhythmiaRepository.findAll(
        _query,
        order,
        orderBy,
        limit
      )
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
        });
    });
  }

  static updateById(id: number, arrhythmiaData: any) {
    return new Promise((resolve: any, reject: any) => {
      ArrhythmiaRepository.updateById(id, arrhythmiaData)
        .then((data) => {
          resolve(data.raw);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static deleteById(id: number) {
    return new Promise((resolve: any, reject: any) => {
      ArrhythmiaRepository.deleteById(id)
        .then((data) => {
          resolve(data);
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
