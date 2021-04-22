import { CurvesI } from '../interfaces/curvesI';
import { BaseFormat } from '../models/baseFormat';
import { PPCurvesFormatQuery } from '../models/ppCurvesFormatQuery';
import { PPCurveRepository } from '../repositories/ppcurvesRepository';

export class PPcurveService {
  constructor() { }

  /**
   * Find all curves according to @param query
   * @param query
   * @param order
   * @returns
   */
  static async findAll(query: any = null): Promise<CurvesI> {
    try {
      const { where, order, orderBy, id_scenario, id_as } = PPcurveService.setUpQuery(query);

      const curves: any = await PPCurveRepository.findAll(where, order, orderBy, id_scenario, id_as)
      let formatQuery: BaseFormat = new PPCurvesFormatQuery(curves);
      const queryInfoPruned = formatQuery.formatQuery();

      return queryInfoPruned;

    } catch (error) {
      console.log(error);
    }

  }

  /**
   * Build query params according with @param query
   * @param query 
   * @returns 
   */
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
