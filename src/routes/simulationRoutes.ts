import { SimulationController } from '../controllers/simulationController';
import { Router } from 'express';
import { isAuth } from '../middleware/auth';

const simulationController: SimulationController = new SimulationController();
const router: Router = Router();

router
  .route('')
  .post(isAuth, simulationController.create)
  .get(isAuth, simulationController.findAll);

router
  .route('/:id_simulation')
  .put(isAuth, simulationController.updateById)
  .delete(isAuth, simulationController.deleteById);

router
  .route('/scenarios/:id_scenario')
  .get(isAuth, simulationController.getSimulationsFromScenario);

export const SimulationRoutes: Router = router;
