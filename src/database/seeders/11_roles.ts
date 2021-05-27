import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Role } from '../../entity/role';
import { RoleI } from '../../interfaces/roleI';

export default class CreatePpPerAs implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        try {
            const roles: RoleI[] = [{
                id_role: 1,
                name: 'viewer'
            },
            {
                id_role: 2,
                name: 'writer'
            },
            {
                id_role: 3,
                name: 'admin'
            }];
            await connection.createQueryBuilder().insert().into(Role).values(roles).execute();

        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
