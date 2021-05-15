import { SessionService } from './sessionService';
import { UserI } from './../interfaces/userI';
import { environment } from './../env/environment';
import { UserRepository } from '../repositories/userRepository';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { RoleI } from '../interfaces/roleI';
import { JWTResponseI } from '../interfaces/JWTresponseI';

export class UserService {
  static findAll(query: any) {
    return new Promise((resolve: any, reject: any) => {
      UserRepository.findAll(query, query?.order, query?.orderBy, query?.limit)
        .then((medications: any) => {
          resolve(medications);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  static async create(userData: UserI): Promise<UserI> {
    try {
      const user: UserI = await UserRepository.create(userData);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async findOneByEmail(email: any): Promise<UserI> {
    try {
      const user: UserI = await UserRepository.findByEmail(email);
      return user;
    } catch (error) {
      throw error;
    }
  }

  static async login(email: string, password: string): Promise<JWTResponseI> {
    const SECRET_KEY: string = environment.JWT.JWT_SECRET;
    const expiresIn: number = parseInt(environment.JWT.EXPIRES_IN) * 60 * 24;
    try {
      const user: UserI = await UserService.findOneByEmail(email);
      if (user) {
        const userDataToVerify: JWTResponseI = {
          user: {
            id_user: user.id_user,
            name: user.name,
            surname: user.name,
            email,
            institution: user.institution,
            roles: user.roles,
          },
          expiresIn
        }
        const isValidPassword: boolean = await UserService.isValidPassword(password, user.password);
        if (isValidPassword) {
          const access_token: string = jwt.sign(userDataToVerify, SECRET_KEY);
          userDataToVerify.access_token = access_token;
          return userDataToVerify;
        } else throw ({ status: 412, msg: 'Invalid password' });

      } else throw ({ status: 412, msg: 'Invalid email' });

    } catch (error) {
      throw error;
    }
  }

  static async register(userData: UserI) {
    try {
      const encryptPassword: string = await UserService.encryptPassword(userData.password);
      const user: UserI = await UserService.create({
        name: userData.name,
        surname: userData.surname,
        email: userData.email,
        password: encryptPassword,
        institution: userData?.institution,
      });
      let auxRoles: RoleI[] = [];
      if (!userData.roles) {
        auxRoles.push({ id_role: 1, name: 'viewer' });
      } else {
        auxRoles = userData.roles;
      }

      await SessionService.create({ id_user: user.id_user, roles: auxRoles });

      return user;
    } catch (error) {
      throw error;
    }
  }


  static async isValidPassword(password: string, userPassword: string): Promise<boolean> {
    return await UserService.comparePassword(password, userPassword);
  }
  static async encryptPassword(password: string): Promise<string> {
    const salt = await bcrypt.genSalt(environment.JWT.SALT_PASSWORD);
    return bcrypt.hash(password, salt);
  }

  static async comparePassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash);
  }
}
