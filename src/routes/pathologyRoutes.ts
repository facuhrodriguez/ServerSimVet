import { Router } from 'express';
import { PathologyController } from "../controllers/PathologyController";
import { isAuth } from "../middleware/auth";

const pathologyController : PathologyController = new PathologyController();
const router : Router = Router();

router.route('')
    .post(isAuth, pathologyController.insert)
    .get(isAuth, pathologyController.get);

router.route('/:id_pat')
    .put(isAuth, pathologyController.update)
    .delete(isAuth, pathologyController.delete)

export const PathologyRoutes : Router = router;