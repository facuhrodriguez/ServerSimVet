import { SimulationController } from "../controllers/SimulationController";
import { Router } from "express";
import { isAuth } from "../middleware/auth";

const simulationController: SimulationController = new SimulationController();
const router: Router = Router();

router
  .route("")
  .post(isAuth, simulationController.create)
  .get(isAuth, simulationController.findAll);

router
  .route("/:id")
  .put(isAuth, simulationController.updateById)
  .delete(isAuth, simulationController.deleteById);

export const SimulationRoutes: Router = router;
