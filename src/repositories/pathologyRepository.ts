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
}
