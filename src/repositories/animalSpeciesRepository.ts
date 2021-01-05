import { AnimalSpecies } from "../entity/animalSpecies";
import { getManager, EntityManager, ObjectID } from "typeorm";

export class AnimalSpeciesRepository {
  static async create(animalSpecie: any) {
    return await getManager().getRepository(AnimalSpecies).save(animalSpecie);
  }

  static async findAll(
    query: any,
    order: any = "DESC",
    orderBy: any = "name",
    limit: number = 20
  ) {
    let result: any = getManager()
      .getRepository(AnimalSpecies)
      .createQueryBuilder();
    if (query) {
      result = await result
        .where(query)
        .orderBy(orderBy, order)
        .paginate(limit);
    }
    return result;
  }

  static async deleteById(id: number) {
    return await getManager()
      .getRepository(AnimalSpecies)
      .delete({ id_as: id });
  }

  static async updateById(id: number, animalSpecieData: any) {
    return await getManager()
      .getRepository(AnimalSpecies)
      .createQueryBuilder()
      .update(AnimalSpecies, animalSpecieData)
      .where({ id_as: id })
      .returning("*")
      .updateEntity(true)
      .execute();
  }
}
