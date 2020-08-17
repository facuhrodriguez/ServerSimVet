import { Router } from 'express';
import { ArrhythmiaPerScenarioController } from "../controllers/arrhythmiaPerScenarioController";
// import { isAuth } from "../middleware//auth";
import * as isAuth from '../middleware/auth';

const arrhythmiaPerScenarioController : ArrhythmiaPerScenarioController = new ArrhythmiaPerScenarioController();
const router : Router = Router();

router.route('')
    .post(isAuth.isAuth, arrhythmiaPerScenarioController.insert)
    .get(arrhythmiaPerScenarioController.get);

router.route('/:id_arr')
    .delete(arrhythmiaPerScenarioController.delete);

export const ArrhythmiaPerScenarioRoutes : Router = router;


