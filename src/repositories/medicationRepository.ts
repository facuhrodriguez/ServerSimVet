import { Medication } from './../entities/medication';
import { getManager } from 'typeorm';

export class MedicationRepository {

    static create(medData: any) {
       return getManager().getRepository(Medication).save(medData);
    }

    static findAll(query:any, order: any = 'DESC', orderBy: any = 'name', 
        limit: number = 20) {
        return getManager().getRepository(Medication)
            .createQueryBuilder()
            .where(query)
            .orderBy(orderBy, order)
            .paginate(limit);
    }
}
