import { Router } from 'express';
import { MPerScenarioController } from "../controllers/MPerScenarioController";
import { isAuth } from "../middleware/auth";


const mPerScenarioController : MPerScenarioController = new MPerScenarioController();
const router : Router = Router();

router.route('')
    .post(isAuth, mPerScenarioController.insert)
    .get(isAuth, mPerScenarioController.get);

router.route('/:id_med')
    .put(isAuth, mPerScenarioController.update)
    .delete(isAuth, mPerScenarioController.delete);

export const MPerScenarioRoutes : Router = router;