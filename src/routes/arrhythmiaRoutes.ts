import { Router } from 'express';
import { ArrhythmiaController } from "../controllers/arrythmiaController";
import { isAuth } from "../middleware/auth";


const arrhythmiaController : ArrhythmiaController = new ArrhythmiaController();
const router : Router = Router();

router.route('')
    .post(arrhythmiaController.insert)
    .get(arrhythmiaController.findAll);

router.route('/:id')
    .delete( arrhythmiaController.delete)
    .put(arrhythmiaController.updateById);


export const ArrhythmiaRoutes : Router = router;