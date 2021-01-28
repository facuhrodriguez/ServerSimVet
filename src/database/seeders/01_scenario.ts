import { Scenario } from '../../entity/scenario';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateScenarios implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Scenario)
      .values([
        {
          name: 'Scenario 1',
          description: 'Scenario with multiple pathologies, medications and arrhythmias',
        },
      ])
      .execute();
  }
}
