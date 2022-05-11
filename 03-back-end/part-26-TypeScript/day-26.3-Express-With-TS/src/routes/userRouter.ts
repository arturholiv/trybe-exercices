import { Router } from 'express';
import UserController from '../controller/user.controller';

const userController = new UserController();

const router = Router();

router
  .get('/', userController.getAll)
  .post('/', userController.create)
  .get('/:id', userController.getById)
  .put('/:id', userController.update)
  .delete('/:id', userController.remove);

export default router;
