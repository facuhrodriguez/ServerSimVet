import { MPerScenarioRepository } from './../repositories/mPerScenarioRepository';
export class MPerScenarioService {
  static create(data: any) {
    return new Promise((resolve, reject) => {
      try {
        data.forEach(async (element: any) => {
          await MPerScenarioRepository.create(element);
        });

        resolve('OK');
      } catch (error) {
        console.log(error);
        reject(error);
      }
    });
  }

  static findAll(query: any) {
    return new Promise((resolve, reject) => {
      MPerScenarioRepository.findAll(query)
        .then((_data) => {
          resolve(_data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }
}
