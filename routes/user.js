import { Router } from "express";

import {UserController} from '../controllers/users.js'
import { UserValidator } from "../validators/userValidator.js";

export const userRouter = Router();

userRouter.get('/',UserController.getAll);
userRouter.get('/:id',UserController.getById);
// userRouter.post('/',UserController.create);
userRouter.put('/:id',UserValidator.validatePut(),UserController.update);
userRouter.patch('/:id',UserValidator.validatePatch(),UserController.update);
userRouter.delete('/:id',UserController.deleteUser);
