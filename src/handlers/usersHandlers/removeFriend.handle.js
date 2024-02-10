import removeFriend from "../../controllers/usersControllers/removeFriend.controller.js";

/**
    * Handler function to remove a friend.
    * 
    * @param {object} req - Express request object.
    * @param {object} res - Express response object.
*/

const removeFriendHandle = async(req, res) => {
    const { id } = req.user
    const { userId } = req.body
    
    try {
        if(!userId) return res.status(404).json({message: "Friend's ID is required"});

        const userFound = await removeFriend(id, userId)

        if(!userFound) return res.status(404).json({message: "Couldn't remove that friend"});

        return res.status(201).json(userFound)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default removeFriendHandle