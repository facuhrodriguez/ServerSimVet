import { SimulationRepository } from './../repositories/simulationRepository';

export class SimulationService {
  static findAll(query: any) {
    return new Promise((resolve, reject) => {
      const { where, scenario, orderBy, order, limit } = SimulationService.setUpQuery(query);
      SimulationRepository.findAll(where, scenario, order, orderBy, limit)
        .then((simulations) => {
          resolve(simulations);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        });
    });
  }

  static create(simulationData: any) {
    return new Promise((resolve, reject) => {
      SimulationRepository.create(simulationData)
        .then((simulation) => {
          resolve(simulation);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static deleteById(simulationId: number) {
    return new Promise((resolve, reject) => {
      SimulationRepository.deleteById(simulationId)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static update(simulationId: number, simulationData: any) {
    return new Promise((resolve, reject) => {
      SimulationRepository.updateById(simulationId, simulationData)
        .then((data) => {
          resolve(data);
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  static setUpQuery(query: any) {
    let where: any = {};
    let scenario: number;
    const orderBy = query.orderBy ? query.orderBy : 'simulation.name';
    const order = query.order ? query.order : 'ASC';
    const limit: number = query.limit ? parseInt(query.limit.toString()) : 10;

    if (query.name) where.simulation.name = query.name;

    if (query.description) where.simulation.description = query.description;

    if (query.scenario) scenario = query.scenario;

    return { where, scenario, orderBy, order, limit };
  }
}
