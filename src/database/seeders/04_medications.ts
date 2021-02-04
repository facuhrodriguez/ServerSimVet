import { Medication } from '../../entity/medication';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateMedications implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Medication)
      .values([
        {
          name: 'Epinephrine',
          description:
            'Epinephrine, also called adrenaline, hormone that is secreted mainly by the medulla of the adrenal glands and that functions primarily to increase cardiac output and to raise glucose levels in the blood.',
        },
        {
          name: 'Amiodarone',
          description:
            'Amiodarone is an antiarrhythmic medication used to treat and prevent a number of types of irregular heartbeats',
        },
        {
          name: 'Atropine',
          description:
            'Atropine is a medication used to treat certain types of nerve agent and pesticide poisonings as well as some types of slow heart rate, and to decrease saliva production during surgery',
        },
      ])
      .execute();
  }
}
