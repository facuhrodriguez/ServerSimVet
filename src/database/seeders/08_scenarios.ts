import { Scenario } from '../../entity/scenario';
import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateScenario implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const scenarios = [
      {
        name: 'Scenario 01',
        description: 'Scenario 01 for test pruposal',
        arrhythmias: [
          {
            id_arr: 3,
            name: 'Ventricular arrhythmia',
            description:
              ' heart’s lower chambers. They can be very dangerous and usually require medical care right away',
          },
        ],
        pathologies: [
          {
            id_pat: 2,
            name: 'Bovine viral diarrhoea virus',
            description: 'Virus Bovine',
          },
        ],
        medications: [
          {
            dose: 15,
            unit: 'l',
            created_at: '2021-03-23T01:32:44.609Z',
            updated_at: '2021-03-23T01:32:44.609Z',
            medication: {
              id_medication: 2,
              name: 'Amiodarone',
              description:
                'Amiodarone is an antiarrhythmic medication used to treat and prevent a number of types of irregular heartbeats',
            },
          },
        ],
      },
      {
        name: 'Scenario 02',
        description: 'Test scenario 02',
        arrhythmias: [
          {
            id_arr: 2,
            name: 'Supraventricular arrhythmia',
            description:
              'are known by their fast heart rates, or tachycardia. Tachycardia occurs when the heart, at rest, goes above 100 beats per minute. The fast pace is sometimes paired with an uneven heart rhythm. Sometimes the upper and lower chambers beat at different rates.',
          },
        ],
        pathologies: [
          {
            id_pat: 1,
            name: 'Brucellosis',
            description:
              'Is a bacterial infection that spreads from animals to people. Most commonly, people are infected by eating raw or unpasteurized dairy products.',
          },
        ],
        medications: [
          {
            dose: 15,
            unit: 'asf',
            created_at: '2021-03-24T01:01:32.863Z',
            updated_at: '2021-03-24T01:01:32.863Z',
            medication: {
              id_medication: 2,
              name: 'Amiodarone',
              description:
                'Amiodarone is an antiarrhythmic medication used to treat and prevent a number of types of irregular heartbeats',
            },
          },
        ],
      },
    ];

    await scenarios.forEach(async (sc: any) => {
      await connection.getRepository(Scenario).save(sc);
    });

    return Promise.resolve(true);
  }
}
