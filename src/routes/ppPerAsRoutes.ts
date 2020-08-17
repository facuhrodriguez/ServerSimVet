import { Router } from 'express';
import { PpPerAsController } from "../controllers/PpPerAsController";
import { isAuth } from "../middleware/auth";

const ppPerAsController : PpPerAsController = new PpPerAsController();
const router : Router = Router();

router.route('')
    .post(isAuth, ppPerAsController.insert)
    .get(isAuth, ppPerAsController.get);

router.route('/:id_med')
    .delete(isAuth, ppPerAsController.delete)
    .put(isAuth, ppPerAsController.update);

export const PpPerAsRoutes : Router = router;