import { AnimalSpecies } from './../entity/animalSpecies';
import { Simulation } from './../entity/simulation';
import { getManager } from 'typeorm';

export class SimulationRepository {
  static async create(simulation: any) {
    return await getManager().getRepository(Simulation).save(simulation);
  }

  static async findAll(
    query: any = null,
    order: any = 'DESC',
    orderBy: any = 'simulation.name',
    limit: number = 20
  ) {
    let result: any = await getManager()
      .getRepository(Simulation)
      .createQueryBuilder('simulation')
      .innerJoinAndSelect('simulation.animalSpecie', 'as')
      .leftJoinAndSelect('simulation.scenarios', 'scenarios')
      .leftJoinAndSelect('scenarios.medications', 'medications')
      .leftJoinAndSelect('medications.medication', 'medication')
      .leftJoinAndSelect('scenarios.arrhythmias', 'arr')
      .leftJoinAndSelect('scenarios.pathologies', 'pat')
      .orderBy(orderBy, order)
      .paginate(limit);

    // .orderBy(orderBy, order)
    // .paginate(limit);

    // if (query) {
    //   result = await result
    //     .where(query)
    //     .orderBy(orderBy, order)
    //     .paginate(limit);
    // } else result = await result.getMany();
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
    // return await getManager()
    //   .getRepository(Simulation)
    //   .createQueryBuilder()
    //   .update(Simulation, simulationData)
    //   .where({ id_simulation: id })
    //   .returning('*')
    //   .updateEntity(true)
    //   .execute();
  }
}
