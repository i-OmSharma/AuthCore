import {Router} from 'express';
import * as authController from '../controller/auth.controller.js';
const authRouter = Router();

authRouter.post("/auth/register", authController.register);

export default authRouter;
