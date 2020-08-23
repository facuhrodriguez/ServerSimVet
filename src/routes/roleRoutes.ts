import { Router } from 'express';
import { RoleController } from "../controllers/RoleController";
import { isAuth } from "../middleware/auth";

const roleController : RoleController = new RoleController();
const router : Router = Router();

router.route('')
    .get(isAuth, roleController.get)
    .post(isAuth, roleController.insert);

router.route('/:id_role')
    .put(isAuth, roleController.update)
    .delete(isAuth, roleController.delete);

export const RoleRoutes : Router = router;