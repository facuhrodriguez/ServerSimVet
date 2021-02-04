import { DatabaseConfig } from './../db';

DatabaseConfig.connection().then(() => {
  const connection = DatabaseConfig.getconnection();

  connection
    .synchronize(true)
    .then(() => {
      console.log('Database synchronized!');
      return;
    })
    .catch((err) => {
      console.log(err);
    });
});
