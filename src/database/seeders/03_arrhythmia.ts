import { Arrhythmia } from '../../entity/arrhythmia';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateArrhythmias implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const data = [
      {
        name: 'Scenario 1',
        description: 'Scenario with multiple pathologies, medications and arrhythmias',
      },
    ];
    await connection
      .createQueryBuilder()
      .insert()
      .into(Arrhythmia)
      .values([
        {
          name: 'Bradyarrhythmia',
          description:
            'bradycardia is often defined as a heart rate that is slower than 60 beats per minute, although some studies use a heart rate of less than 50 beats per minute',
        },
        {
          name: 'Supraventricular arrhythmia',
          description:
            'are known by their fast heart rates, or tachycardia. Tachycardia occurs when the heart, at rest, goes above 100 beats per minute. The fast pace is sometimes paired with an uneven heart rhythm. Sometimes the upper and lower chambers beat at different rates.',
        },
        {
          name: 'Ventricular arrhythmia',
          description:
            ' heart’s lower chambers. They can be very dangerous and usually require medical care right away',
        },
      ])
      .execute();
  }
}
