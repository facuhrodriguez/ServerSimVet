import { Router } from 'express';
import { PathologyController } from "../controllers/PathologyController";
import { isAuth } from "../middleware/auth";

const pathologyController : PathologyController = new PathologyController();
const router : Router = Router();

router.route('')
    .post(isAuth, pathologyController.insert)
    .get(isAuth, pathologyController.findAll);

export const PathologyRoutes : Router = router;