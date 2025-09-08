import { Router } from "express";

import {BoardController} from '../controllers/boards.js'
import { BoardValidator } from "../validators/boardValidator.js";
import {authenticate} from "../middlewares/sesionValidator.js"

export const boardRouter = Router();

boardRouter.get('/',BoardController.getAll);
boardRouter.post('/',authenticate,BoardValidator.validateCreate(),BoardController.create);

boardRouter.get('/:id',BoardController.getById);
boardRouter.put('/:id',BoardValidator.validatePut(),authenticate,BoardController.update);
boardRouter.patch('/:id',BoardValidator.validatePatch(),BoardController.update);
boardRouter.delete('/:id',BoardController.delete);