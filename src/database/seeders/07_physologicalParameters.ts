import { PhysiologicalParameter } from '../../entity/physiologicalParameter';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreatePhysiologicalParamater implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection
      .createQueryBuilder()
      .insert()
      .into(PhysiologicalParameter)
      .values([
       {
           name: 'Presión sanguínea invasiva',
           description: 'Fuerza de la sangre contra las paredes de los vasos sanguíneos',
           label: 'IBP',
           unit: 'mmHg'
       },
       {
           name: 'Pletismografía',
           description: 'Saturación de oxígeno',
           label: 'sp02',
           unit: '%'
       },
       {
           name: 'Capnografía',
           description: 'Tensión de CO2 en el gas espirado durante el ciclo respiratorio',
           label: 'etC02',
           unit: 'mmHg'
       },
       {
           name: 'ECG',
           description: 'Frecuencia cardíaca:  valor absoluto en ondas PQRST/min.',
           label: 'ECG',
           unit: 'mm/s'
       },
       {
           name: 'Temperatura',
           description: 'Temperatura corporal',
           label: 'TEMP',
           unit: '°C'
       },
       {
           name: 'Respiración',
           description: 'Frecuencia respiratoria',
           label: 'RESP',
           unit: 'rpm'
       },
       {
           name: 'Presión sanguínea no invasiva',
           description: 'Fuerza de la sangre contra las paredes de los vasos sanguíneos',
           label: 'NIBP',
           unit: 'mmHg'
       },
       {
           name: 'Ciclo Cardíaco',
           description: 'Ritmo cardíaco',
           label: 'CAR',
           unit: 'rpm'
       }
      ])
      .execute();
  }
}