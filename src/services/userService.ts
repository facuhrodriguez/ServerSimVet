import { UserI } from './../interfaces/userI';
import { environment } from './../env/enviroment';
import { UserRepository } from '../repositories/userRepository';
import * as bcrypt from 'bcrypt';
import * as jwt from "jsonwebtoken";

export class UserService  {

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

    static create(userData: any) {
        return new Promise((resolve: any, reject: any) => {
            UserRepository.create(userData)
            .then((data) => {
                resolve(data);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }

    static findOneByEmail(email: any) {
        return new Promise((resolve: any, reject: any) => {
            UserRepository.findByEmail(email).then((user) => {
                resolve(user);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }

    static login(email: string, password: string) {
        const SECRET_KEY : string = 'justAnAwesomeSecret_';
        return new Promise((resolve, reject) => {
            UserService.findOneByEmail(email).then((user: UserI) => {
                if (user) {
                  const result = UserService.comparePassword(password, user.password);
                  const expiresIn : number = 24*60*60 ;
                  if (result) {
                      const access_token = jwt.sign({ id: user.id_user }, SECRET_KEY);
                      // TODO: Insertar la sesión en la tabla session.
                      resolve({
                          id_user: user.id_user,
                          email,
                          access_token,
                          expiresIn
                      })
                  } else {
                      reject(new Error('Internal error'))
                  }
                } else {
                    reject(new Error(`User doesn't exist`));
                }
            })
            .catch((err) => {
                reject(err);
            })
        })
    }

    static async register(userData: UserI) {
        const encryptPassword: string = await UserService.encryptPassword(userData.password);
        return new Promise((resolve, reject) => {
            UserService.create({
                name: userData.name,
                surname: userData.surname,
                email: userData.email,
                password: encryptPassword,
                institution: userData?.institution
            }).then((user) => {
                resolve(user);
            })
            .catch((err) => {
                reject(err);
            })
        })
    }

    static async encryptPassword(password: string): Promise<string> {
        const salt = await bcrypt.genSalt(environment.SALT_PASSWORD);
        return bcrypt.hash(password, salt);
    }

    static async comparePassword(password: string, hash:string) {
        return await bcrypt.compare(password, hash);
    }

}
