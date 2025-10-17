// routes -> endpoints

import { Router } from "express";
import { signUp, singIn, singOut } from "../controllers/auth.controller.js";

const authRouter = Router();

// Path: /api/v1/auth/sign-up (POST)       and so on
authRouter.post('/sign-up', signUp);
authRouter.post('/sign-in', singIn);
authRouter.post('/sign-out', singOut);

export default authRouter;