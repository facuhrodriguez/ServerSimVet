import { SppController } from "../controllers/SppController";
import { Router } from 'express';
import { isAuth } from "../middleware/auth";

const sppController : SppController = new SppController();
const router : Router = Router();

router.route('')
    .post(isAuth, sppController.insert)
    .get(isAuth, sppController.get);

router.route('/:id_spp')
    .delete(isAuth, sppController.delete)
    .put(isAuth, sppController.update);


export const SppRoutes : Router = router;