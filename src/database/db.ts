import { environment } from "../env/enviroment";
// const { Pool } = require("pg");

import { Pool } from "pg";
export const connection =  new Pool({
    user: environment.USER_POSTGRE,
    host: environment.HOST_POSTGRE,
    database: environment.DATABASE_POSTGRE,
    password: environment.PASSWORD_POSTGRE,
    port: environment.PORT_POSTGRE,
});
