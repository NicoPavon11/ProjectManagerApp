import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";

export class TaskValidator{
    static validateCreate(){
        return [
            check('title').exists().notEmpty(),
            check('description').optional().notEmpty(),
            check('deadline').optional().notEmpty(),
            check('priority').exists().notEmpty(),
            check('isDone').exists().notEmpty(),
            check('boardId').exists().notEmpty(),
            check('assignedToId').optional().notEmpty(),
            (req,res,next)=>{
                validateResult(req,res,next)
            }
        ]
    }

    static validatePut(){
        return [
            check('title').exists().notEmpty(),
            check('description').optional().notEmpty(),
            check('deadline').optional().notEmpty(),
            check('priority').exists().notEmpty(),
            check('isDone').exists().notEmpty(),
            check('assignedToId').optional().notEmpty(),
            (req,res,next)=>{
                validateResult(req,res,next)
            }
        ]
    }

    static validatePatch(){
        return [
            check('title').optional().notEmpty(),
            check('description').optional().notEmpty(),
            check('deadline').optional().notEmpty(),
            check('priority').optional().notEmpty(),
            check('isDone').optional().notEmpty(),
            check('assignedToId').optional().notEmpty(),
            (req,res,next)=>{
                validateResult(req,res,next)
            }
        ]
    }
}