import { NextFunction, Request, Response } from 'express';

let handleError = (err: any, req: Request, res: Response, next: NextFunction) => {
  let errorObject;

  if (typeof err.toJson === 'function') {
    errorObject = err.toJson();
  } else {
    errorObject = {
      status: 500,
      name: 'Internal error',
      message: 'Something bad has happened',
    };
  }
  return res.status(errorObject.status).json(errorObject.message);
};

module.exports = handleError;
