import { Router } from "express";

import {BoardController} from '../controllers/boards.js'

export const boardRouter = Router();

boardRouter.get('/',BoardController.getAll);
boardRouter.post('/',BoardController.create);

boardRouter.get('/:id',BoardController.getById);
boardRouter.put('/:id',BoardController.update);
boardRouter.delete('/:id',BoardController.delete);