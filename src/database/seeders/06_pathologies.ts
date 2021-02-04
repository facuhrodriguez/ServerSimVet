import { Pathology } from '../../entity/pathology';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateScenarios implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(Pathology)
      .values([
        {
          name: 'Brucellosis',
          description:
            'Is a bacterial infection that spreads from animals to people. Most commonly, people are infected by eating raw or unpasteurized dairy products.',
        },
        {
          name: 'Bovine viral diarrhoea virus',
          description: 'Virus Bovine',
        },
      ])
      .execute();
  }
}
