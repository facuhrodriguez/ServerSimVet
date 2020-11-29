import { UserController } from "../controllers/UserController";
import { Router } from 'express';
import { isAuth } from "../middleware/auth";

const userController : UserController = new UserController();
const router : Router = Router();

router.route('/login').post(userController.login);
router.route('/register').post(userController.register);
// router.route('/:id_user').put(isAuth,userController.update);
// router.route('/:id_user').delete(isAuth, userController.delete);

export const UserRoutes : Router = router;