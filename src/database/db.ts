import { environment } from "../env/enviroment";
// const { Pool } = require("pg");

import { Pool } from "pg";
export const connection =  new Pool({
    user: environment.user_postgre,
    host: environment.host_postgre,
    database: environment.database_postgre,
    password: environment.password_postgre,
    port: 5432,
});
