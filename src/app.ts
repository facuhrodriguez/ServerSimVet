import express from 'express';
import * as bodyParser from 'body-parser';
import { Routes } from './routes';
//const errors = require('./middleware/errors');

class App {
  public app : express.Application;
  public routes : Routes = new Routes();

  constructor() {
    this.app = express();
    this.config();
    this.routes.routes(this.app);
  }

  /**
   * Set all server configure .
   * TODO: Add logger and security functions.
   */
  private config() : void {
    this.app.use(bodyParser.json()); // Parámetros con formato Json
    this.app.use(bodyParser.urlencoded({ extended: false })); // Permite obtener los parámetros de peticiones
   // this.app.use(errors); // Midlleware para manejo de errores.

  }
}

export default new App().app;


