import unbanFriend from "../../controllers/usersControllers/unbanFriend.controller.js";

/**
    * Handler function to unban a friend.
    * 
    * @param {object} req - Express request object.
    * @param {object} res - Express response object.
*/

const unbanFriendHandle = async(req, res) => {
    const { id } = req.user;
    const { userId } = req.body;

    try {
        if(!userId) return res.status(404).json({message: "User's ID is required"});

        const userFound = await unbanFriend(id, userId)

        if(!userFound) return res.status(404).json({message: "Couldn't unban this user"});

        return res.status(201).json(userFound)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default unbanFriendHandle