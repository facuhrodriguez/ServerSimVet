import { AnimalSpecies } from './../models/animalSpecies';
import { environment } from "../env/enviroment";
// const { Pool } = require("pg");
import {createConnection} from "typeorm";

export const db =  createConnection({
    type: 'postgres',
    host: environment.HOST_POSTGRE,
    port: environment.PORT_POSTGRE,
    username: environment.USER_POSTGRE,
    password: environment.PASSWORD_POSTGRE,
    database: environment.DATABASE_POSTGRE,
    entities: [AnimalSpecies]
});

// export const connection =  new Pool({
//     user: environment.USER_POSTGRE,
//     host: environment.HOST_POSTGRE,
//     database: environment.DATABASE_POSTGRE,
//     password: environment.PASSWORD_POSTGRE,
//     port: environment.PORT_POSTGRE,
// });
