import { Arrhythmia } from '../entity/arrhythmia';
import { getManager } from 'typeorm';

export class ArrhythmiaRepository {

    static create(arrData: any) {
       return getManager().getRepository(Arrhythmia).save(arrData);
    }

    static findAll(query:any, order: any = 'DESC', orderBy: any = 'name', 
        limit: number = 20) {
        return getManager().getRepository(Arrhythmia)
            .createQueryBuilder()
            .where(query)
            .orderBy(orderBy, order)
            .paginate(limit);
    }
}
