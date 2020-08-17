import * as dotenv from "dotenv";
dotenv.config();
export let environment = {
    port: process.env.PORT,
    host_postgre: process.env.HOST_POSTGRE,
    port_postgre: process.env.PORT_POSTGRE,
    database_postgre: process.env.DATABASE_POSTGRE,
    user_postgre: process.env.USER_POSTGRE,
    password_postgre: process.env.PASSWORD_POSTGRE,
    api_url: process.env.API_URL,
}