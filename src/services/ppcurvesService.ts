import { PPCurveRepository } from '../repositories/ppcurvesRepository';

export class PPcurveService {
  constructor() {}

  /**
   * Find all curves according to @param query
   * @param query
   * @param order
   * @returns
   */
  static findAll(query: any = null) {
    return new Promise((resolve: any, reject: any) => {
      const { where, order, orderBy, id_scenario, id_as } = PPcurveService.setUpQuery(query);

      PPCurveRepository.findAll(where, order, orderBy, id_scenario, id_as)
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
    const orderBy = query.orderBy ? query.orderBy : 'curves.t';
    const order = query.order ? query.order : 'ASC';
    let id_scenario: number = -1;
    let id_as: number = -1;
    if (query.animalSpecie) id_as = query.animalSpecie;

    if (query.scenario) id_scenario = parseInt(query.scenario);

    return { where, order, orderBy, id_scenario, id_as };
  }
}
