import * as dotenv from 'dotenv';

dotenv.config({ path: `${__dirname}/../../.env` });

export const environment = {
  PORT: process.env.PORT,
  DB: {
    HOST: process.env.HOST_POSTGRES,
    PORT: process.env.PORT_POSTGRES,
    USER: process.env.USER_POSTGRES,
    PASSWORD: process.env.PASSWORD_POSTGRES,
    NAME: process.env.DATABASE_POSTGRES,
    SCHEMA: process.env.SCHEMA_POSTGRES,
  },
  HOST_POSTGRE: process.env.HOST_POSTGRE,
  PORT_POSTGRE: parseInt(process.env.PORT_POSTGRE),
  DATABASE_POSTGRE: process.env.DATABASE_POSTGRE,
  USER_POSTGRE: process.env.USER_POSTGRE,
  PASSWORD_POSTGRE: process.env.PASSWORD_POSTGRE,
  API_URL: process.env.API_URL,
  SALT_PASSWORD: parseInt(process.env.SALT_PASSWORD),
};
