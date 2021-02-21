import { ScenarioRepository } from './../repositories/scenarioRepository';
export class ScenarioService {
  static findAll(query: any, order: any, orderBy: any, limit: number) {
    return new Promise((resolve: any, reject: any) => {
      const _query = ScenarioService.setUpQuery(query);
      ScenarioRepository.findAll(_query, order, orderBy, limit)
        .then((scenarios: any) => {
          resolve(scenarios);
        })
        .catch((err: any) => {
          reject(err);
        });
    });
  }

  static create(scenarioData: any) {
    return new Promise((resolve: any, reject: any) => {
      ScenarioRepository.create(scenarioData)
        .then((data) => {
          resolve(data.raw);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static updateById(id: number, scenarioData: any) {
    return new Promise((resolve: any, reject: any) => {
      ScenarioRepository.updateById(id, scenarioData)
        .then((data) => {
          resolve(data.raw);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static deleteById(id: number) {
    return new Promise((resolve: any, reject: any) => {
      ScenarioRepository.deleteById(id)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static saveArrhythmias(id_scenario: number, arrhythmias: any) {
    return new Promise((resolve: any, reject: any) => {
      try {
        arrhythmias.forEach(async (arr: any) => {
          await ScenarioRepository.savePathologies(id_scenario, arr);
        });

        resolve('OK');
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  static savePathologies(id_scenario: number, pathologies: [any]) {
    return new Promise((resolve, reject) => {
      try {
        pathologies.forEach(async (pat: any) => {
          await ScenarioRepository.savePathologies(id_scenario, pat);
        });

        resolve('OK');
      } catch (err) {
        console.log(err);
        reject(err);
      }
    });
  }

  static setUpQuery(query: any) {
    const where: any = {};

    if (query.name) where.name = query.name;

    if (query.description) where.description = query.description;

    return where;
  }
}
