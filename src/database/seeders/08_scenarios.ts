import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateScenario implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    await connection.query(
      `insert into simvet.scenario (name, description) values ('Scenario 01', 'Scenario 01 for test');
       insert into simvet.scenario (name, description) values ('Scenario 02', 'Scenario 02 for test');
       insert into simvet.scenario (name, description) values ('Scenario 03', 'Scenario 03 for test');
       insert into simvet.scenario (name, description) values ('Scenario 04', 'Scenario 04 for test');
       insert into simvet.scenario (name, description) values ('Scenario 05', 'Scenario 05 for test');
       insert into simvet.scenario (name, description) values ('Scenario 06', 'Scenario 06 for test');
       insert into simvet.scenario (name, description) values ('Scenario 07', 'Scenario 07 for test');
       insert into simvet.scenario (name, description) values ('Scenario 08', 'Scenario 08 for test');
       insert into simvet.scenario (name, description) values ('Scenario 09', 'Scenario 09 for test');
       `
    );

    await connection.query(`insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (1, 1);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (2, 1);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (3, 1);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (1, 2);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (2, 2);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (3, 2);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (1, 3);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (2, 3);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (3, 3);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (1, 4);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (2, 4);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (3, 4);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (1, 5);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (2, 5);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (3, 6);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (2, 7);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (1, 8);
        insert into simvet.arrhythmiaperscenario (id_arr, id_scenario) values (1, 9);
    `);

    await connection.query(`insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (1, 1, 15, 'ml');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (2, 1, 50, 'mg');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (3, 1, 25, 'cc');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (1, 2, 200, 'ml');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (2, 2, 1, 'mg');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (3, 2, 10, 'cc');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (1, 3, 25, 'ml');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (2, 3, 600, 'mg');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (3, 3, 25, 'cc');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (1, 4, 100, 'ml');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (2, 4, 800, 'mg');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (3, 4, 200, 'cc');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (1, 5, 150, 'ml');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (2, 5, 400, 'mg');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (3, 6, 350, 'cc');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (2, 7, 140, 'mg');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (1, 8, 200, 'ml');
        insert into simvet.mperscenario (id_medication, id_scenario, dose, unit) values (1, 9, 140, 'ml');`);

    await connection.query(`insert into simvet.pathologyperscenario (id_pat, id_scenario) values (1, 1);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (2, 1);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (1, 2);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (2, 2);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (1, 3);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (2, 3);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (1, 4);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (2, 4);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (1, 5);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (2, 5);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (2, 7);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (1, 8);
        insert into simvet.pathologyperscenario (id_pat, id_scenario) values (1, 9);`);

    return Promise.resolve(true);
  }
}
