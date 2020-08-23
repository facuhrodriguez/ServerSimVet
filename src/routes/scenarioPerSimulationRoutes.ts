import { ScenarioPerSimulationController } from '../controllers/scenarioPerSimulationController';
import { Router } from 'express';
import { isAuth } from "../middleware/auth";

const scenarioSimulation : ScenarioPerSimulationController = new ScenarioPerSimulationController();
const router : Router = Router();

router.route('')
    .post(isAuth, scenarioSimulation.insert)
    .get(isAuth, scenarioSimulation.get);

router.route('/:id_scenario')
    .put(isAuth, scenarioSimulation.update)
    .delete(isAuth, scenarioSimulation.delete);


export const ScenarioPerSimulationRoutes : Router = router;