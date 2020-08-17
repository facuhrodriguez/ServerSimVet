import { Router } from 'express';
import { ArrhythmiaController } from "../controllers/arrythmiaController";
import { isAuth } from "../middleware/auth";


const arrhythmiaController : ArrhythmiaController = new ArrhythmiaController();
const router : Router = Router();

router.route('')
    .post(isAuth, arrhythmiaController.insert)
    .get(isAuth, arrhythmiaController.get);

router.route('/:id_arr')
    .delete( isAuth, arrhythmiaController.delete)
    .put(isAuth, arrhythmiaController.update);


export const ArrhythmiaRoutes : Router = router;