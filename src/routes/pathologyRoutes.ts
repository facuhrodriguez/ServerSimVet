import { Router } from 'express';
import { PathologyController } from "../controllers/PathologyController";
import { isAuth } from "../middleware/auth";

const pathologyController : PathologyController = new PathologyController();
const router : Router = Router();

router.route('')
    .post(pathologyController.insert)
    .get(pathologyController.findAll);

router.route('/:id')
    .put(pathologyController.updateById)
    .delete(pathologyController.delete);

export const PathologyRoutes : Router = router;