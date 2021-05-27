import { MPerScenarioController } from './../controllers/mPerScenarioController';
import { ScenarioController } from '../controllers/scenarioController';
import { Router } from 'express';
import { isAuth } from '../middleware/auth';

const scenarioController: ScenarioController = new ScenarioController();
const mPerScenario: MPerScenarioController = new MPerScenarioController();

const router: Router = Router();

router.route('').post(isAuth, scenarioController.create).get(isAuth, scenarioController.findAll);

router.route('/medication').post(isAuth, mPerScenario.create);

router.route('/arrhythmias').post(isAuth, scenarioController.saveArrhythmias);

router.route('/pathologies').post(isAuth, scenarioController.savePathologies);
router
  .route('/:id')
  .put(isAuth, scenarioController.updateById)
  .delete(isAuth, scenarioController.delete);

export const ScenarioRoutes: Router = router;
