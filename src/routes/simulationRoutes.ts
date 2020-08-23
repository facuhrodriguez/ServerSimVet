import { SimulationController } from "../controllers/SimulationController";
import { Router } from 'express';
import { isAuth } from "../middleware/auth";

const simulationController : SimulationController = new SimulationController();
const router : Router = Router();

router.route('')
    .post(isAuth, simulationController.insert)
    .get(isAuth, simulationController.get);

router.route('/:id_simulation')
    .put(isAuth, simulationController.update)
    .delete(isAuth, simulationController.delete);

export const SimulationRoutes : Router = router;