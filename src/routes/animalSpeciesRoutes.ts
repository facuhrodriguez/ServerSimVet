import { Router } from 'express';
import { AnimalSpeciesController } from "../controllers/animalSpeciesController";
import { isAuth } from "../middleware/auth";

const animalSpeciesController : AnimalSpeciesController = new AnimalSpeciesController();
const router : Router = Router();
router.route('')
    .post(isAuth, animalSpeciesController.insert)
    .get(isAuth, animalSpeciesController.get);
router.route('/:id_as')
    .delete(isAuth, animalSpeciesController.delete)
    .put(isAuth, animalSpeciesController.update);

export const AnimalSpeciesRoutes : Router = router;