import { User } from './../entity/user';
import { getManager } from 'typeorm';

export class UserRepository {
  static async create(userData: any) {
    return await getManager().getRepository(User).save(userData);
  }

  static async findAll(query: any, order: any = 'DESC', orderBy: any = 'name', limit: number = 20) {
    let result: any = await getManager()
      .getRepository(User)
      .createQueryBuilder()
      .where(query)
      .orderBy(orderBy, order);

    result = result.paginate(limit);
    return result;
  }

  static async findByEmail(email: any) {
    let result: any = await getManager()
      .getRepository(User)
      .createQueryBuilder('user')
      .leftJoinAndSelect('user.roles', 'roles')
      .where({ email: email });

    result = result.paginate(1);
    return result;
  }
}
