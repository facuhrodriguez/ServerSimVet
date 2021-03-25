import { Router } from 'express';
import { PPCurvesController } from '../controllers/ppCurvesController';
import { isAuth } from '../middleware/auth';

const ppCurvesController: PPCurvesController = new PPCurvesController();
const router: Router = Router();

router.route('').get(isAuth, ppCurvesController.findAll);

export const PPCurvesRoutes: Router = router;
