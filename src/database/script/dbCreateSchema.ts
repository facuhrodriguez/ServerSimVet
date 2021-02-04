import { DatabaseConfig } from '../db';

DatabaseConfig.connection()
  .then(async () => {
    const queryRunner = DatabaseConfig.getconnection();
    queryRunner
      .query(`CREATE SCHEMA IF NOT EXISTS simvet`)
      .then((cc) => {
        console.log('Schema simvet created!');
      })
      .catch((err) => {
        throw err;
      });
  })
  .catch((err) => {
    console.log(err);
    return;
  });
