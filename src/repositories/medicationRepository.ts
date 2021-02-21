import { Medication } from '../entity/medication';
import { getManager } from 'typeorm';

export class MedicationRepository {
  static async create(medData: any) {
    return await getManager().getRepository(Medication).save(medData);
  }

  static findAll(query: any, order: any = 'DESC', orderBy: any = 'name', limit: number = 20) {
    return getManager()
      .getRepository(Medication)
      .createQueryBuilder()
      .where(query)
      .orderBy(orderBy, order)
      .paginate(limit);
  }

  static async updateById(id: number, medicationData: any) {
    return await getManager()
      .getRepository(Medication)
      .createQueryBuilder()
      .update(Medication, medicationData)
      .where({ id_medication: id })
      .returning('*')
      .updateEntity(true)
      .execute();
  }

  static async deleteById(id: number) {
    return await getManager().getRepository(Medication).delete({ id_medication: id });
  }
}
