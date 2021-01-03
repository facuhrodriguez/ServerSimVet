import { User } from "../entity/user";
import { getManager } from "typeorm";

export class UserRepository {
  static async create(userData: any) {
    return await getManager().getRepository(User).save(userData);
  }

  static async findAll(
    query: any,
    order: any = "DESC",
    orderBy: any = "name",
    limit: number = 20
  ) {
    return await getManager()
      .getRepository(User)
      .createQueryBuilder()
      .where(query)
      .orderBy(orderBy, order)
      .paginate(limit);
  }

  static async findByEmail(email: any) {
      return await getManager().getRepository(User).findOne({email: email});
  }
}
