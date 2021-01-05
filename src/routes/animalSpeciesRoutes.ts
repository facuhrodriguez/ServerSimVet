import { Router } from 'express';
import { AnimalSpeciesController } from "../controllers/animalSpeciesController";
import { isAuth } from "../middleware/auth";

const animalSpeciesController : AnimalSpeciesController = new AnimalSpeciesController();
const router : Router = Router();
router.route('')
    .post(animalSpeciesController.create)
    .get(animalSpeciesController.findAll);

router.route('/:id')
    .delete(animalSpeciesController.delete)
    .put(animalSpeciesController.updateById);

export const AnimalSpeciesRoutes : Router = router;