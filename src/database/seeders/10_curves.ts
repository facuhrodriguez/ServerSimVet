import { Connection } from 'typeorm';
import { Factory, Seeder } from 'typeorm-seeding';

export default class CreateCurves implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    try {
      await connection.query(`insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0, -1.26582278481014, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.40041067761807, -1.47679324894516, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.418891170431211, -0.421940928270047, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.433264887063655, -2.53164556962025, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.449691991786448, 8.22784810126582, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.462012320328542, 13.7130801687764, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.480492813141684, 20.042194092827, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.501026694045174, 25.9493670886076, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.519507186858316, 29.3248945147679, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.540041067761807, 31.8565400843882, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.570841889117043, 33.5443037974684, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.605749486652977, 35.0210970464135, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.642710472279261, 35.6540084388186, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.743326488706365, 35.6540084388186, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.835728952772074, 36.0759493670886, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.848049281314168, 35.0210970464135, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.856262833675564, 31.0126582278481, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.862422997946612, 25.1054852320675, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.874743326488706, 17.9324894514768, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.893223819301848, 10.337552742616, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.915811088295688, 5.06329113924051, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.938398357289528, 1.26582278481013, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (0.971252566735113, -0.632911392405077, 1, 3, 1);
            insert into simvet.ppcurve (t, value, id_as, id_pp, id_scenario) values (1, -1.47679324894516, 1, 3, 1);`);
      return Promise.resolve(true);
    } catch (error) {
      console.log(error);
      return Promise.reject(error);
    }
  }
}
