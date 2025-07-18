import { check } from "express-validator";
import { validateResult } from "../helpers/validateHelper.js";


export class BoardValidator {
    static validateCreate() {
        return [
            check('name').exists().notEmpty(),
            check('description').optional().notEmpty(),
            check('ownerId').exists().notEmpty(),
            (req, res, next) => {
                validateResult(req, res, next)
            }
        ]
    }

    static validatePut() {
        return [
            check('name').exists().notEmpty(),
            check('description').optional().notEmpty(),
            (req, res, next) => {
                validateResult(req, res, next)
            }
        ]
    }

    static validatePatch() {
        return [
            check('name').optional().notEmpty(),
            check('description').optional().notEmpty(),
            (req, res, next) => {
                validateResult(req, res, next)
            }
        ]

    }

}