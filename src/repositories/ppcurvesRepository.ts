import { PPCurve } from '../entity/ppcurve';
import { getManager } from 'typeorm';

export class PPCurveRepository {
  static async findAll(
    query: any,
    order: any = 'DESC',
    orderBy: any = 'curves.t',
    scenario: number = -1,
    animalSpecie: number = -1
  ) {
    let result: any = getManager()
      .getRepository(PPCurve)
      .createQueryBuilder('curves')
      .innerJoinAndSelect('curves.scenario', 'scenario')
      .innerJoinAndSelect('curves.ppPerAs', 'ppperas')
      .innerJoinAndSelect('ppperas.physiologicalParameter', 'physiologicalParamater')
      .innerJoinAndSelect('ppperas.animalSpecie', 'animalSpecie');

    if (query) {
      result = await result.where(query);
    }

    if (scenario != -1) {
      result = await result.andWhere('scenario.id_scenario = :scenario', { scenario });
    }

    if (animalSpecie != -1) {
      result = await result.andWhere('animalSpecie.id_as = :animalSpecie', { animalSpecie });
    }

    result = await result.orderBy(orderBy, order);

    return result.paginate(1000);
  }
}
