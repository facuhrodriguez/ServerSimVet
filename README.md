# ServerSimVet

SimVet project Server

1. Clone repository

   git clone https://github.com/facuhrodriguez/ServerSimVet.git

2. Install node_modules

   cd ServerSimVet

   npm i

3. Create .env file with next properties. Replace by your own values

   NODE_ENV=development

   PORT=8001

   API_URL=localhost:8001

   HOST_POSTGRES=localhost

   PORT_POSTGRES=5434

   DATABASE_POSTGRES=postgres

   SCHEMA_POSTGRES=simvet

   USER_POSTGRES=simvet_user

   PASSWORD_POSTGRES=secret

   SALT_PASSWORD = 10

4. Run command in console:

   cd docker/ && docker-compose up

5. Set up docker db user with docker:

   npm run db:docker:config

6. Restart DB

   npm run db:reset

7. Start project in development:

   npm run start:reload

8. To conect with the database using an IDE:

   "host": "localhost",
   "port": 5434,
   "username": "simvet_user",
   "password": "secret",
   "database": "postgres",
   "schema": "simvet"
