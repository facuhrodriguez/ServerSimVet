import { NextFunction, Request, Response } from 'express';
import app from './app';
import { environment } from './env/environment';
import { authentication } from './middleware/authentication';
// Allow any method from any host and log requests
app.use((req: Request, res: Response, next: NextFunction) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
  if ('OPTIONS' === req.method) {
    res.sendStatus(200);
  } else {
    next();
  }
});

app.use(authentication);

app.listen(environment.PORT, () => {
  console.log('SimVet - Server listening on port ', environment.PORT);
});
