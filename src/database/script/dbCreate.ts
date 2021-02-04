import { DatabaseConfig } from '../db';
DatabaseConfig.connection()
  .then(async (_db) => {
    const queryRunner = DatabaseConfig.getconnection().createQueryRunner();
    queryRunner
      .createDatabase('simvet', false)
      .then((cc) => {
        console.log('Database simvet created!');
        return;
      })
      .catch((err) => {
        console.log(err);
        return;
      });
  })
  .catch((err) => {
    console.log(err);
    return;
  });
