import { Router } from 'express';

/* HANDLERS */
import getAllUsersHandle from '../handlers/usersHandlers/getAllUsers.handle.js';
import getUserByEmailHandle from '../handlers/usersHandlers/getUserByEmail.handle.js';
import getUserByIdHandle from '../handlers/usersHandlers/getUserById.handle.js';
import getUserByUsernameHandle from '../handlers/usersHandlers/getUserByUsername.handle.js';
import getUsersBannedHandle from '../handlers/usersHandlers/getUsersBannedHandle.handle.js';
import getActiveUsersHandle from '../handlers/usersHandlers/getActiveUsers.handle.js';
import getAllFriendsHandle from '../handlers/usersHandlers/getAllFriends.handle.js';
import getAllRequestsHandle from '../handlers/usersHandlers/getAllRequests.handle.js';
import getAllBannedFriendsHandle from '../handlers/usersHandlers/getAllBanned.handle.js';

import postUserHandle from '../handlers/usersHandlers/postUser.handle.js';
import sendFriendRequestHandle from '../handlers/usersHandlers/sendFriendRequest.handle.js';

import unbanUserHandle from '../handlers/usersHandlers/unbanUser.handle.js';
import updateUserHandle from '../handlers/usersHandlers/updateUser.handle.js';
import deleteFriendRequestHandle from '../handlers/usersHandlers/deleteFriendRequest.handle.js';
import acceptFriendHandle from '../handlers/usersHandlers/acceptFriend.handle.js';
import removeFriendHandle from '../handlers/usersHandlers/removefriend.handle.js';
import unbanFriendHandle from '../handlers/usersHandlers/unbanFriend.handle.js';

import banUserHandle from '../handlers/usersHandlers/banUser.handle.js';
import banFriendHandle from '../handlers/usersHandlers/banFriend.handle.js';

import validateSchema from '../middlewares/validator.middleware.js';
import registerSchema from '../schemas/authSchema/registerSchema.js';
import adminAuth from '../middlewares/adminAuth.js';
import authRequired from'../middlewares/validateToken.js'

const usersRouter = Router()

usersRouter.get("/all", adminAuth, getAllUsersHandle)
usersRouter.get("/email", adminAuth, getUserByEmailHandle)
usersRouter.get("/:id", authRequired, getUserByIdHandle)
usersRouter.get("/search/username", authRequired, getUserByUsernameHandle)
usersRouter.get("/get/banned", adminAuth, getUsersBannedHandle)
usersRouter.get("/get/active", adminAuth, getActiveUsersHandle)
usersRouter.get("/:id/allFriends", authRequired, getAllFriendsHandle)
usersRouter.get("/:id/allRequests", authRequired, getAllRequestsHandle)
usersRouter.get("/:id/allBanned", authRequired, getAllBannedFriendsHandle)

usersRouter.post("/", validateSchema(registerSchema), postUserHandle)
usersRouter.post("/:id/sendFriendRequest", authRequired, sendFriendRequestHandle)

usersRouter.put("/:id/restore", adminAuth, unbanUserHandle)
usersRouter.put("/:id/update", authRequired, updateUserHandle)
usersRouter.put("/deleteFriendRequest", authRequired, deleteFriendRequestHandle)
usersRouter.put("/acceptFriend", authRequired, acceptFriendHandle)
usersRouter.put("/removeFriend", authRequired, removeFriendHandle)
usersRouter.put("/unban/friend", authRequired, unbanFriendHandle)

usersRouter.delete("/:id", adminAuth, banUserHandle)
usersRouter.delete("/ban/friend", authRequired, banFriendHandle)

export default usersRouter