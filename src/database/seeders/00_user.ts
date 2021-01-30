import { User } from '../../entity/user';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(User)
      .values([
        {
          email: 'rodriguezfacundohernan@gmail.com',
          name: 'Facundo Hernán',
          surname: 'Rodríguez',
          password: 'secret',
          institution: 'Facultad de Ciencias Exactas',
        },
        {
          email: 'claudiocabrera12@gmail.com',
          name: 'Claudio',
          surname: 'Cabrera',
          password: 'secret',
          institution: 'Facultad de Ciencias Exactas',
        },
      ])
      .execute();
  }
}
