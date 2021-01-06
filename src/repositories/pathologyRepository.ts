import { Pathology } from '../entity/pathology';
import { getManager } from 'typeorm';

export class PathologyRepository {

    static create(patData: any) {
       return getManager().getRepository(Pathology).save(patData);
    }

    static findAll(query:any, order: any = 'DESC', orderBy: any = 'name', 
        limit: number = 20) {
        return getManager().getRepository(Pathology)
            .createQueryBuilder()
            .where(query)
            .orderBy(orderBy, order)
            .paginate(limit);
    }

    static async updateById(id: number, pathologyData: any) {
        return await getManager()
          .getRepository(Pathology)
          .createQueryBuilder()
          .update(Pathology, pathologyData)
          .where({ id_pat: id })
          .returning("*")
          .updateEntity(true)
          .execute();
      }

      static async deleteById(id: number) {
        return await getManager()
          .getRepository(Pathology)
          .delete({ id_pat: id });
      }


}
