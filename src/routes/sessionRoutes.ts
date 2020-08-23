import { SessionController } from "../controllers/sessionController";
import { Router } from 'express';
import { isAuth } from "../middleware//auth";

const sessionController : SessionController = new SessionController();
const router : Router = Router();

router.route('')
    .post(isAuth, sessionController.insert)
    .get(isAuth, sessionController.get);

router.route('/:id_session')
    .delete(isAuth, sessionController.delete);

export const SessionRoutes : Router = router;