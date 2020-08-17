import { ScenarioController } from '../controllers/ScenarioController';
import { Router } from 'express';
import { isAuth } from "../middleware/auth";

const scenarioController : ScenarioController = new ScenarioController();
const router : Router = Router();

router.route('')
    .post(isAuth, scenarioController.insert)
    .get(isAuth, scenarioController.get);

router.route('/:id_scenario')
    .put(isAuth, scenarioController.update)
    .delete(isAuth, scenarioController.delete)

export const ScenarioRoutes : Router = router;