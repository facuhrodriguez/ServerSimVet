import { DatabaseConfig } from "../db";
DatabaseConfig.connection()
  .then(async (_db) => {
    const queryRunner = DatabaseConfig.getconnection().createQueryRunner();
    queryRunner
      .createDatabase("simvet", false)
      .then((cc) => {
        console.log("Database simvet created!");
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


// db.then((_db) => {
//     _db.query(`CREATE DATABASE simvet WITH ENCODING 'UTF-8'`)
//         .then(() => {
//             console.log("Database simvet created")
//         })
//         .catch((err: any) => {
//             console.log(err.message);
//         });
//     });
