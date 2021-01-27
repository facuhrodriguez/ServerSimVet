import { Scenario } from '../entity/scenario';
import { getManager, EntityManager, ObjectID } from 'typeorm';

export class ScenarioRepository {
  static async create(scenario: any) {
    return await getManager().getRepository(Scenario).save(scenario);
  }

  static async findAll(
    query: any,
    order: any = 'DESC',
    orderBy: any = 's.name',
    limit: number = 20
  ) {
    let result: any = await getManager()
      .getRepository(Scenario)
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.simulations', 'sim')
      .leftJoinAndSelect('s.arrhythmias', 'arr')
      .leftJoinAndSelect('s.pathologies', 'pat')
      .leftJoinAndSelect('s.mPerScenario', 'med')
      .leftJoinAndSelect('med.medication', 'medication')
      .where(query)
      .orderBy(orderBy, order)
      .paginate(limit);
    // .where(query);
    // if (query) {
    //   result = await result.where(query).orderBy(orderBy, order);
    // }
    return result;
  }

  static async findById(id: number) {
    return getManager()
      .getRepository(Scenario)
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.simulations', 'sim')
      .leftJoinAndSelect('s.arrhythmias', 'arr')
      .leftJoinAndSelect('s.pathologies', 'pat')
      .leftJoinAndSelect('s.mPerScenario', 'med')
      .leftJoinAndSelect('med.medication', 'medication')
      .where({ 's.id': id });
  }

  static async deleteById(id: number) {
    return await getManager().getRepository(Scenario).delete({ id_scenario: id });
  }

  static async updateById(id: number, scenarioData: any) {
    return await getManager()
      .getRepository(Scenario)
      .createQueryBuilder()
      .update(Scenario, scenarioData)
      .where({ id_scenario: id })
      .returning('*')
      .updateEntity(true)
      .execute();
  }
}
