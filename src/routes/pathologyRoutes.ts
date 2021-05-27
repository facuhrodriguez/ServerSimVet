import { Router } from 'express';
import { PathologyController } from '../controllers/pathologyController';
import { isAuth } from '../middleware/auth';

const pathologyController: PathologyController = new PathologyController();
const router: Router = Router();

router.route('').post(isAuth, pathologyController.insert).get(isAuth, pathologyController.findAll);

router
  .route('/:id')
  .put(isAuth, pathologyController.updateById)
  .delete(isAuth, pathologyController.delete);

export const PathologyRoutes: Router = router;
