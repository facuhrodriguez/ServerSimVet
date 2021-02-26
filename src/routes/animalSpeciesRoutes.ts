import { Router } from 'express';
import { AnimalSpeciesController } from '../controllers/animalSpeciesController';
import { authentication } from '../middleware/authentication';

const animalSpeciesController: AnimalSpeciesController = new AnimalSpeciesController();
const router: Router = Router();
router
  .route('')
  .post(authentication, animalSpeciesController.create)
  .get(authentication, animalSpeciesController.findAll);

router
  .route('/:id')
  .delete(authentication, animalSpeciesController.delete)
  .put(authentication, animalSpeciesController.updateById);

export const AnimalSpeciesRoutes: Router = router;
