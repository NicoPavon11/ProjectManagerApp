import { Router } from "express";

import {BoardController} from '../controllers/boards.js'
import { BoardValidator } from "../validators/boardValidator.js";

export const boardRouter = Router();

boardRouter.get('/',BoardController.getAll);
boardRouter.post('/',BoardValidator.validateCreate(),BoardController.create);

boardRouter.get('/:id',BoardController.getById);
boardRouter.put('/:id',BoardValidator.validatePut(),BoardController.update);
boardRouter.patch('/:id',BoardValidator.validatePatch(),BoardController.update);
boardRouter.delete('/:id',BoardController.delete);