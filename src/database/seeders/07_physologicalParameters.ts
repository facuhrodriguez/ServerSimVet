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
                    unit: 'mmHg',
                    rate: 'heart',
                    colorLine: '#73648B'
                },
                {
                    name: 'Pletismografía',
                    description: 'Saturación de oxígeno',
                    label: 'sp02',
                    unit: '%',
                    rate: 'breath',
                    colorLine: '#A77955'
                },
                {
                    name: 'Capnografía',
                    description: 'Tensión de CO2 en el gas espirado durante el ciclo respiratorio',
                    label: 'etC02',
                    unit: 'mmHg',
                    rate: 'breath',
                    colorLine: '#6DC0EC'
                },
                {
                    name: 'ECG',
                    description: 'Frecuencia cardíaca:  valor absoluto en ondas PQRST/min.',
                    label: 'ECG',
                    unit: 'mm/s',
                    rate: 'heart',
                    colorLine: '#577E5F'
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
                    unit: 'mmHg',
                    rate: 'heart',

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