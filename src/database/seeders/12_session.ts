import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';
import { Role } from '../../entity/role';
import { RoleI } from '../../interfaces/roleI';

export default class CreatePpPerAs implements Seeder {
    public async run(factory: Factory, connection: Connection): Promise<void> {
        try {
            await connection.query(`insert into simvet.session (id_user, id_role) values (1, 3);
                insert into simvet.session (id_user, id_role) values (2, 3)`);
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}
