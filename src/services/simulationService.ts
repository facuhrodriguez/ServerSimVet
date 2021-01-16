import { SimulationRepository } from "./../repositories/simulationRepository";

export class SimulationService {
  static findAll(query: any, order: any, orderBy: any, limit: number) {
    return new Promise((resolve, reject) => {
      SimulationRepository.findAll(query, order, orderBy, limit)
        .then((simulations) => {
          resolve(simulations);
        })
        .catch((err) => {
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
}
