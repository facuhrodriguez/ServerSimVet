import { AnimalSpecies } from "../entities/animalSpecies";
import { getManager } from "typeorm";

export class AnimalSpeciesRepository {
  static async create(animalSpecie: any) {
    return await getManager().getRepository(AnimalSpecies).save(animalSpecie);
  }

  static async findAll(query: any, order: any = 'DESC', orderBy: any = 'name', 
  limit: number = 20) {
    return await getManager()
      .getRepository(AnimalSpecies)
      .createQueryBuilder(query)
      .orderBy(orderBy, order)
      .paginate(limit);
  }
}
