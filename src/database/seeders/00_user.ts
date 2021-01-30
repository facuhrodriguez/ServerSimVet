import { User } from '../../entity/user';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateUsers implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const user1 = new User(),
      user2 = new User();
    user1.name = 'Facundo Hernán';
    user1.surname = 'Rodríguez';
    user1.password = 'secret';
    user1.institution = 'Facultad de Ciencias Exactas';
    user1.email = 'rodriguezfacundohernan@gmail.com';

    user2.name = 'Claudio';
    user2.surname = 'Cabrera';
    user2.password = 'secret';
    user2.institution = 'Facultad de Ciencias Exactas';
    user2.email = 'claudiocabrera12@gmail.com';
    await connection.createQueryBuilder().insert().into(User).values([user1, user2]).execute();
  }
}
