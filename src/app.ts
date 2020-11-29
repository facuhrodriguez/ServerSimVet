import express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes';
const errors = require('./middleware/errors');
import { db } from './database/db';
import {pagination} from 'typeorm-pagination'
class App {
  public app : express.Application;
  public routes : Routes = new Routes();

  constructor() {
    db.then((connection) => {
      console.log("Connection to database success!")
    })
    .catch((err) => {
      console.error("Error - ", err);
    });
    this.app = express();
    this.config();
    this.app.use(pagination);
    this.routes.routes(this.app);
  }

  /**
   * Set all server configure .
   * TODO: Add logger and security functions.
   */
  private config() : void {
    this.app.use(bodyParser.json()); // Parámetros con formato Json
    this.app.use(bodyParser.urlencoded({ extended: false })); // Permite obtener los parámetros de peticiones
    this.app.use(errors); // Midlleware para manejo de errores.

  }
}

export default new App().app;


