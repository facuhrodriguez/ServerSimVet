
import { Router } from 'express';
import { PhysiologicalParameter } from "../controllers/physiologicalParameterController";
import { isAuth } from "../middleware/auth";

const physiologicalP : PhysiologicalParameter = new PhysiologicalParameter();
const router : Router = Router();

router.route('')
    .post(isAuth, physiologicalP.insert)
    .get(isAuth, physiologicalP.get);

router.route('/:id_pp')
    .put(isAuth, physiologicalP.update)
    .delete(isAuth, physiologicalP.delete);
    
export const PhysiologicalParameterRoutes : Router = router;