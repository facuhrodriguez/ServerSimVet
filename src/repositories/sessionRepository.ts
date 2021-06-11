import { getManager } from 'typeorm';
import { RoleI } from '../interfaces/roleI';
export class SessionRepository {
  static async create(sessionData: { id_user: number, roles: RoleI[] }) {
    console.log("session data", sessionData);
    const results: any = [];
    for (let index = 0; index < sessionData.roles.length; index++) {
      let session = await getManager()
        .createQueryBuilder()
        .insert()
        .into('session')
        .values({ id_role: sessionData.roles[index].id_role, id_user: sessionData.id_user })
        .returning('*')
        .execute();
      if (session)
        results.push(session);
    }
    return results;
  }
}
