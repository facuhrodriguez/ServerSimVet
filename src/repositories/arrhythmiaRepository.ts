import { Arrhythmia } from '../entity/arrhythmia';
import { getManager } from 'typeorm';

export class ArrhythmiaRepository {
  static create(arrData: any) {
    return getManager().getRepository(Arrhythmia).save(arrData);
  }

  static findAll(query: any, order: any = 'DESC', orderBy: any = 'name', limit: number = 20) {
    return getManager()
      .getRepository(Arrhythmia)
      .createQueryBuilder()
      .where(query)
      .orderBy(orderBy, order)
      .paginate(limit);
  }

  static async updateById(id: number, arrhythmiaData: any) {
    return await getManager()
      .getRepository(Arrhythmia)
      .createQueryBuilder()
      .update(Arrhythmia, arrhythmiaData)
      .where({ id_arr: id })
      .returning('*')
      .updateEntity(true)
      .execute();
  }

  static async deleteById(id: number) {
    return await getManager().getRepository(Arrhythmia).delete({ id_arr: id });
  }
}
