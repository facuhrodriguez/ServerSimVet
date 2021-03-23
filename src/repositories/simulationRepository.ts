import { AnimalSpecies } from './../entity/animalSpecies';
import { Simulation } from './../entity/simulation';
import { getManager } from 'typeorm';

export class SimulationRepository {
  static async create(simulation: any) {
    return await getManager().getRepository(Simulation).save(simulation);
  }

  static async findAll(
    query: any = null,
    scenario: any = null,
    order: any = 'DESC',
    orderBy: any = 'simulation.name',
    limit: number = 20
  ) {
    let result: any = getManager()
      .getRepository(Simulation)
      .createQueryBuilder('simulation')
      .innerJoinAndSelect('simulation.animalSpecie', 'as')
      .leftJoinAndSelect('as.ppPerAs', 'ppp')
      .leftJoinAndSelect('ppp.physiologicalParameter', 'pp')
      .leftJoinAndSelect('simulation.scenarios', 'scenarios')
      .leftJoinAndSelect('scenarios.arrhythmias', 'arr')
      .leftJoinAndSelect('scenarios.pathologies', 'pat')
      .leftJoinAndSelect('scenarios.medications', 'medications')
      .innerJoinAndSelect('medications.medication', 'medication')
      .where(query);

    if (scenario) {
      result = await result.andWhere(`scenarios.id_scenario = ${scenario}`);
    }
    result = await result.orderBy(orderBy, order).paginate(limit);

    return result;
  }

  static async deleteById(id: number) {
    return await getManager().getRepository(Simulation).delete({ id_simulation: id });
  }

  static async updateById(id: number, simulationData: any) {
    const simulation: Simulation = new Simulation();
    simulation.id_simulation = id;
    if (simulationData.name) simulation.name = simulationData.name;

    if (simulationData.description) simulation.description = simulationData.description;
    if (simulationData.scenarios) simulation.scenarios = simulationData.scenarios;
    if (simulationData.animalSpecie) simulation.animalSpecie = simulationData.animalSpecie;
    return await getManager().getRepository(Simulation).save(simulation);
  }
}
