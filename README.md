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
     HOST_POSTGRE=localhost
     PORT_POSTGRE=5432
     DATABASE_POSTGRE=postgres
     USER_POSTGRE=postgres
     PASSWORD_POSTGRE=PASSWORD
     SALT_PASSWORD = 10


4. Run command: cd docker/ && docker-compose up

5. Restart DB
      npm run db:reset
      
6. Start project in development:
  
     npm run start:reload
  
 
