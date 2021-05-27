import { Router } from 'express';
import { AnimalSpeciesController } from '../controllers/animalSpeciesController';
import { authentication } from '../middleware/authentication';
import { permit } from '../middleware/authorization';
import { userRoles } from '../helpers/userHelper';
const animalSpeciesController: AnimalSpeciesController = new AnimalSpeciesController();
const router: Router = Router();
router
  .route('')
  .post(authentication, permit(userRoles.admin, userRoles.writer), animalSpeciesController.create)
  .get(authentication, permit(userRoles.admin, userRoles.writer), animalSpeciesController.findAll);

router
  .route('/:id')
  .delete(authentication, permit(userRoles.admin, userRoles.writer), animalSpeciesController.delete)
  .put(authentication, permit(userRoles.admin, userRoles.writer), animalSpeciesController.updateById);

export const AnimalSpeciesRoutes: Router = router;
