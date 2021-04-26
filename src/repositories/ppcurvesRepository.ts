import { getManager } from 'typeorm';
import { PPperAs } from '../entity/ppPerAs';

export class PPCurveRepository {
  static async findAll(
    query: any,
    order: any = 'DESC',
    orderBy: any = 'curves.t',
    scenario: number = -1,
    animalSpecie: number = -1
  ) {
    let result: any = getManager()
      .getRepository(PPperAs)
      .createQueryBuilder('physiologicalperAs')
      .innerJoinAndSelect('physiologicalperAs.animalSpecie', 'animalSpecie')
      .innerJoinAndSelect('physiologicalperAs.physiologicalParameter', 'physiologicalParamater')
      .leftJoinAndSelect('physiologicalperAs.curves', 'curves')
      .leftJoinAndSelect('curves.scenario', 'scenario');

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

    return result.paginate();
  }
}
