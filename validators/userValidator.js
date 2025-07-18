import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";


export class UserValidator {
    static validateCreate() {
        return [
            check('name').exists().notEmpty(),
            check('email').exists().isEmail(),
            check('password').exists().notEmpty().isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
            (req, res, next) => {
                validateResult(req, res, next)
            }
        ]
    }

    static validateLogin(){
        return [
            check('email').isEmail().notEmpty(),
            check('password').isLength({min:8}).withMessage('Password must be at least 8 characters long'),
            (req,res,next)=>{
                validateResult(req,res,next)
            }
        ]
    }

    static validatePut(){
        return [
            check('name').exists().notEmpty(),
            check('email').exists().isEmail(),
            check('password').exists().notEmpty().isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
            (req, res, next) => {
                validateResult(req, res, next)
            }
        ]
    }

    static validatePatch(){
        return [
            check('name').exists().notEmpty().optional(),
            check('email').exists().isEmail().optional(),
            check('password').exists().notEmpty().isLength({ min: 8 }).withMessage('Password must be at least 8 characters long').optional(),
            (req, res, next) => {
                validateResult(req, res, next)
            }
        ]
    }
}



