import { RoleI } from '../interfaces/roleI';
import { SessionI } from '../interfaces/sessionI';
import { SessionRepository } from './../repositories/sessionRepository';
export class SessionService {
  static async create(sessionData: { id_user: number, roles: RoleI[] }) {
    return SessionRepository.create(sessionData);
  }
}
