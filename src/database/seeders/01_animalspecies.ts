import { AnimalSpecies } from '../../entity/animalSpecies';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(AnimalSpecies)
      .values([
        { name: 'Equino', description: 'Equino hasta 20kg.' },
        { name: 'Canino', description: 'Canino hasta 10kg.' },
      ])
      .execute();
  }
}
