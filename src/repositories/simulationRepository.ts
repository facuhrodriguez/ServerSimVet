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
    return await getManager()
      .getRepository(Simulation)
      .createQueryBuilder()
      .update(Simulation, simulationData)
      .where({ id_simulation: id })
      .returning('*')
      .updateEntity(true)
      .execute();
  }
}
