import { Router } from 'express';
import { MedicationController } from "../controllers/medicationController";
import { isAuth } from "../middleware/auth";


const medicationController : MedicationController = new MedicationController();
const router : Router = Router();

router.route('')
    .post(isAuth, medicationController.create)
    .get(isAuth, medicationController.findAll);

// router.route('/:id_med')
//     .delete(isAuth, medicationController.delete)
//     .put(isAuth, medicationController.update);

export const MedicationRoutes : Router = router;