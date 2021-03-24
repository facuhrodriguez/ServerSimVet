import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreatePpPerAs implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    try {
      await connection.query(`insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (1, 1, 200, 500);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (1, 2, 100, 300);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (1, 3, 400, 800);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (1, 4, 20, 90);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (1, 5, 150, 300);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (1, 6, 200, 400);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (1, 7, 50, 60);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (1, 8, 120, 500);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (2, 1, 300, 600);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (2, 2, 250, 500);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (2, 3, 600, 1000);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (2, 4, 30, 100);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (2, 5, 300, 600);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (2, 6, 400, 800);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (2, 7, 60, 70);
        insert into simvet.ppperas (id_as, id_pp, alert_low, alert_high) values (2, 8, 120, 500);`);

      return Promise.resolve(true);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}
