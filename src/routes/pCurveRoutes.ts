import { Router } from 'express';
import { PCurveController } from "../controllers/PCurveController";
import { isAuth } from "../middleware/auth";

const pCurveController : PCurveController = new PCurveController();
const router : Router = Router();

router.route('')
    .post(isAuth, pCurveController.insert)
    .get(isAuth, pCurveController.get);
// router.route('/:id_as')
//     .put(isAuth, pCurveController.update)
//     .delete(isAuth, pCurveController.delete);

export const PCurveRoutes : Router = router;