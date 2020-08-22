import * as dotenv from "dotenv";

dotenv.config({path: `${__dirname}/../../.env`});

export const environment = {
    PORT: process.env.PORT,
    HOST_POSTGRE: process.env.HOST_POSTGRE,
    PORT_POSTGRE: parseInt(process.env.PORT_POSTGRE),
    DATABASE_POSTGRE: process.env.DATABASE_POSTGRE,
    USER_POSTGRE: process.env.USER_POSTGRE,
    PASSWORD_POSTGRE: process.env.PASSWORD_POSTGRE,
    API_URL: process.env.API_URL,
    SALT_PASSWORD: parseInt(process.env.SALT_PASSWORD),
}