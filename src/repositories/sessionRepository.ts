import { getManager } from 'typeorm';
export class SessionRepository {
  static async create(sessionData: any) {
    console.log("session data", sessionData);
    const results = [];
    for (let index = 0; index < sessionData.roles.length; index++) {
      let session = await getManager()
        .createQueryBuilder()
        .insert()
        .into('session')
        .values({ id_role: sessionData.roles[index].id_role, id_user: sessionData.id_user })
        .returning('*')
        .execute();

      results.push(session);
    }
    return results;
  }
}
