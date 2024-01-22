import { Router } from 'express';

/* HANDLERS */
import getPostsByIdHandle from '../handlers/postsHandlers/getPostsById.handle.js';
import getPostsAllFriendsHandle from '../handlers/postsHandlers/getPostsAllFriends.handle.js';

import newPostHandle from '../handlers/postsHandlers/newPost.handle.js';

import authRequired from '../middlewares/validateToken.js';
import updatePostHandle from '../handlers/postsHandlers/updatePost.handle.js';
import removePostHandle from '../handlers/postsHandlers/removePost.handle.js';

const postsRouter = Router()

postsRouter.get("/getPostsById", authRequired, getPostsByIdHandle)
postsRouter.get("/getPostsAllFriends", authRequired, getPostsAllFriendsHandle)

postsRouter.post("/", authRequired, newPostHandle)

postsRouter.put("/:postId", authRequired, updatePostHandle)

postsRouter.delete("/", authRequired, removePostHandle)

export default postsRouter