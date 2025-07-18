import { Router } from "express";

import {TaskController} from '../controllers/tasks.js'

import {TaskValidator} from '../validators/taskValidator.js'

export const taskRouter = Router();

taskRouter.get('/',TaskController.getAll);
taskRouter.get('/:id',TaskController.getById);
taskRouter.post('/',TaskValidator.validateCreate(),TaskController.create);
taskRouter.put('/:id',TaskValidator.validatePut(),TaskController.update);
taskRouter.patch('/:id',TaskValidator.validatePatch(),TaskController.update);
taskRouter.delete('/:id',TaskController.delete);