import { PPCurveRepository } from 'src/repositories/ppcurvesRepository';

export class PPcurveService {
  constructor() {}

  static findAll(query: any = null, order: { orderBy: string; order: string }) {
    return new Promise((resolve, reject) => {
      const { where, animalSpecie } = PPcurveService.setUpQuery(query);
      PPCurveRepository.findAll(where, order.order, order.orderBy)
        .then((data: any) => {
          resolve(data);
        })
        .catch((error: any) => {
          reject(error);
        });
    });
  }
  static setUpQuery(query: any) {
    const where: any = {};
    let animalSpecie: number, scenario: number;

    if (query.animalSpecie) animalSpecie = query.animalSpecie;

    if (query.scenario) scenario = query.scenario;

    return { where, animalSpecie };
  }
}
