import { Router } from 'express';

/* HANDLERS */
import loginUserHandle from '../handlers/authHandlers/loginUser.handle.js';

import validateSchema from '../middlewares/validator.middleware.js';
import loginSchema from '../schemas/authSchema/loginSchema.js'
import logoutUser from '../handlers/authHandlers/logoutUser.handle.js';
import authRequired from '../middlewares/validateToken.js';

const authRouter = Router()

authRouter.post("/login", validateSchema(loginSchema), loginUserHandle)
authRouter.get("/logout", logoutUser)


export default authRouter