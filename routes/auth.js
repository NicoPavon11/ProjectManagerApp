import { Router } from "express";
import { AuthController } from '../controllers/auths.js'
import { UserValidator} from "../validators/userValidator.js";

export const authRouter = Router();


authRouter.post('/login', UserValidator.validateLogin(),AuthController.login);
authRouter.post('/register', UserValidator.validateCreate(),AuthController.create);
authRouter.post('/logout', AuthController.logout);




//TO DO
//refreshToken

