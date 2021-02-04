import { environment } from './../../env/environment';
import { DatabaseConfig } from '../db';
DatabaseConfig.connection()
  .then(async (_db) => {
    const schema = environment.DB.SCHEMA;
    const user = environment.DB.USER;

    // await DatabaseConfig.connection();
    const queryRunner = DatabaseConfig.getconnection();
    await queryRunner
      .query(`DROP SCHEMA IF EXISTS simvet CASCADE`)
      .then(async (cc) => {
        console.log('Schema simvet deleted!');
        await queryRunner.query(`CREATE SCHEMA IF NOT EXISTS ${schema} AUTHORIZATION ${user}`);
        await queryRunner.query(`GRANT ALL ON SCHEMA ${schema} TO ${user}`);
        console.log('Schema created!');
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  })
  .catch((err) => {
    console.log(err);
    throw err;
  });
