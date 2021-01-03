import { DatabaseConfig } from "../db";
DatabaseConfig.connection()
  .then(async (_db) => {
    const queryRunner = DatabaseConfig.getconnection();
    await queryRunner
      .query(`DROP SCHEMA IF EXISTS simvet CASCADE`)
      .then((cc) => {
        console.log("Schema simvet deleted!");
        return;
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

