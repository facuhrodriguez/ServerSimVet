import { PPCurve } from 'src/entity/ppcurve';
import { getManager } from 'typeorm';

export class PPCurveRepository {
  static async findAll(query: any, order: any = 'DESC', orderBy: any = 't', limit: number = 1000) {
    let result: any = getManager()
      .getRepository(PPCurve)
      .createQueryBuilder('curves')
      .innerJoinAndSelect('curves.scenario', 'scenario')
      .innerJoinAndSelect('curves.ppPerAs', 'ppperas')
      .innerJoinAndSelect('ppperas.physiologicalParameter', 'physiologicalParamater')
      .innerJoinAndSelect('ppperas.animalSpecie', 'animalSpecie');

    if (query) {
      result = await result.where(query).orderBy(orderBy, order);
    }
    return result;
  }
}
