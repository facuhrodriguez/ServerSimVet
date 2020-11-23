import { db } from '../db';


db.then((_db) => {
    _db.query(`CREATE DATABASE simvet IF NOT EXISTS ENCODING UTF-8 
    WHERE NOT EXISTS (SELECT FROM pg_database WHERE datname = simvet`)
        .then(() => {
            _db.dropDatabase()
        })
        .catch((err: any) => {
            console.log(err.message);
        });
    });


