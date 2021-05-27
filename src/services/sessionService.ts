import { SessionI } from '../interfaces/sessionI';
import { SessionRepository } from './../repositories/sessionRepository';
export class SessionService {
  static async create(sessionData: any) {
    return SessionRepository.create(sessionData);
  }
}
