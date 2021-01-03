import { AnimalSpecies } from "../entity/animalSpecies";
import { getManager, ObjectID } from "typeorm";

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

  static async deleteById(id: number) {
    return await getManager()
      .getRepository(AnimalSpecies)
      .delete({id_as: id});
  }
}
