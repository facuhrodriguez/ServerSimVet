import { ScenarioController } from '../controllers/ScenarioController';
import { Router } from 'express';
import { isAuth } from '../middleware/auth';

const scenarioController: ScenarioController = new ScenarioController();
const router: Router = Router();

router.route('').post(isAuth, scenarioController.create).get(isAuth, scenarioController.findAll);

router
  .route('/:id')
  .put(isAuth, scenarioController.updateById)
  .delete(isAuth, scenarioController.delete);

export const ScenarioRoutes: Router = router;
