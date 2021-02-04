import { environment } from './../../env/environment';
import { exec } from 'child_process';

const superuser = 'postgres';
const user = environment.DB.USER;
const pass = environment.DB.PASSWORD;
const dbName = environment.DB.NAME;

exec(
  `docker exec postgres-simvet psql -U ${superuser} -c "CREATE ROLE ${user} WITH CREATEDB LOGIN PASSWORD '${pass}';"`,
  (err: any, stdout: any, stderr: any) => {
    if (err) {
      console.log(`error: ${err.message}`);
      return;
    }
    if (stderr) {
      console.log(`stderr: ${stderr}`);
      return;
    }

    exec(
      `docker exec postgres-simvet psql --username ${superuser} -c "GRANT ALL PRIVILEGES ON DATABASE ${dbName} TO GROUP ${user} WITH GRANT OPTION;"`,
      (err2, stdout2, stderr2) => {
        if (err2) {
          console.log(`error: ${err2.message}`);
          return;
        }
        if (stderr2) {
          console.log(`stderr: ${stderr2}`);
        }
        console.log(`CREATED USER ${user}`);
      }
    );
  }
);
