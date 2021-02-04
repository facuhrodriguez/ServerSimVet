import { Router } from 'express';
import { AnimalSpeciesController } from '../controllers/animalSpeciesController';
import { isAuth } from '../middleware/auth';

const animalSpeciesController: AnimalSpeciesController = new AnimalSpeciesController();
const router: Router = Router();
router
  .route('')
  .post(isAuth, animalSpeciesController.create)
  .get(isAuth, animalSpeciesController.findAll);

router
  .route('/:id')
  .delete(isAuth, animalSpeciesController.delete)
  .put(isAuth, animalSpeciesController.updateById);

export const AnimalSpeciesRoutes: Router = router;
