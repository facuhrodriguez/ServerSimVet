import { Router } from 'express';
import { MedicationController } from "../controllers/medicationController";
import { isAuth } from "../middleware/auth";


const medicationController : MedicationController = new MedicationController();
const router : Router = Router();

router.route('')
    .post(isAuth, medicationController.create)
    .get(medicationController.findAll);

router.route('/:id')
    .delete(isAuth, medicationController.delete)
    .put(isAuth, medicationController.updateById);

export const MedicationRoutes : Router = router;