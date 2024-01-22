import { Router } from 'express';

import usersRouter from './users.routes.js';
import messagesRouter from './messages.routes.js';
import conversationsRouter from './conversations.routes.js';
import postsRouter from './posts.routes.js';
import authRouter from './auth.routes.js';

const mainRouter = Router();

mainRouter.use("/users", usersRouter)
mainRouter.use("/messages", messagesRouter)
mainRouter.use("/conversations", conversationsRouter)
mainRouter.use('/posts', postsRouter)
mainRouter.use('/auth', authRouter)


export default mainRouter