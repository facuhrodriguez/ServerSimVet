import { Medication } from './../entity/medication';
import { MperScenario } from './../entity/mPerScenario';
import { getManager, getRepository } from 'typeorm';
import { Scenario } from './../entity/scenario';

export class MPerScenarioRepository {
  static async create(data: any) {
    const medicationRepository = getRepository(Medication);
    const medication = await medicationRepository.findOne({ id_medication: data.id_medication });
    const scenarioRepository = getRepository(Scenario);
    const scenario = await scenarioRepository.findOne({ id_scenario: data.id_scenario });
    const _data = new MperScenario();
    _data.dose = data.dose;
    _data.unit = data.unit;
    _data.medication = medication;
    _data.scenario = scenario;
    console.log(_data);
    return getManager().getRepository(MperScenario).save(_data);
  }

  static findAll(query: any, order: any = 'DESC', orderBy: any = 'name', limit: number = 20) {
    return getManager()
      .getRepository(MperScenario)
      .createQueryBuilder('m')
      .leftJoinAndSelect('m.medications', 'medications')
      .where(query)
      .orderBy(orderBy, order)
      .paginate(limit);
  }
}
