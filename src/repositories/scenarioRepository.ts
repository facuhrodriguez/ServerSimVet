import { Medication } from './../entity/medication';
import { MedicationI } from './../interfaces/medicationI';
import { MperScenario } from './../entity/mPerScenario';
import { Scenario } from '../entity/scenario';
import { getManager, EntityManager, ObjectID } from 'typeorm';

export class ScenarioRepository {
  static async create(scenario: any) {
    const newScenario: Scenario = new Scenario();
    newScenario.name = scenario.name;
    if (scenario.description) newScenario.description = scenario.description;
    if (scenario.pathologies) newScenario.pathologies = scenario.pathologies;
    if (scenario.arrhythmias) newScenario.arrhythmias = scenario.arrhythmias;
    if (scenario.medications) newScenario.medications = scenario.medications;

    return await getManager().getRepository(Scenario).save(newScenario);
  }

  static async findAll(
    query: any,
    order: any = 'DESC',
    orderBy: any = 's.name',
    limit: number = 20
  ) {
    let result: any = getManager()
      .getRepository(Scenario)
      .createQueryBuilder('s')
      .leftJoinAndSelect('s.arrhythmias', 'arr')
      .leftJoinAndSelect('s.pathologies', 'pat')
      .leftJoinAndSelect('s.medications', 'med')
      .leftJoinAndSelect('med.medication', 'medication')
      .leftJoinAndSelect('s.curves', 'pp')
      .where(query)
      .orderBy(orderBy, order);

    result = await result.paginate(limit);

    return result;
  }

  static async findById(id: number) {
    return getManager()
      .getRepository(Scenario)
      .createQueryBuilder('s')
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
    const newScenario: Scenario = new Scenario();
    newScenario.id_scenario = id;
    if (scenarioData.name) newScenario.name = scenarioData.name;

    if (scenarioData.description) newScenario.description = scenarioData.description;
    if (scenarioData.pathologies) newScenario.pathologies = scenarioData.pathologies;
    if (scenarioData.arrhythmias) newScenario.arrhythmias = scenarioData.arrhythmias;
    if (scenarioData.medications) newScenario.medications = scenarioData.medications;
    return await getManager().getRepository(Scenario).save(newScenario);
  }

  static async saveArrhythmias(id_scenario: number, arrhythmias: any) {
    return await getManager()
      .getRepository(Scenario)
      .createQueryBuilder()
      .relation(Scenario, 'arrhythmias')
      .of(arrhythmias)
      .add(id_scenario);
  }

  static async savePathologies(id_scenario: number, pathology: any) {
    return await getManager()
      .getRepository(Scenario)
      .createQueryBuilder()
      .relation(Scenario, 'pathologies')
      .of(id_scenario)
      .add(pathology);
  }
}
