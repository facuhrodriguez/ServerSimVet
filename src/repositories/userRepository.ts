import { User } from './../entity/user';
import { getManager } from 'typeorm';
import { UserI } from '../interfaces/userI';

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

  static async findByEmail(email: string): Promise<UserI | null> {
    try {
      let result: any = getManager()
        .getRepository(User)
        .createQueryBuilder('user')
        .leftJoinAndSelect('user.roles', 'roles')
        .where({ email: email });

      result = await result.paginate(1);
      if (result.data) {
        return result.data[0];
      }
      else return null;
    } catch (error) {
      throw error;
    }

  }
}
