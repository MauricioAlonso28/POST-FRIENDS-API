import acceptFriend from "../../controllers/usersControllers/acceptFriend.controller.js";

/**
    * Handler function to accept a friend request.
    * 
    * @param {object} req - Express request object.
    * @param {object} res - Express response object.
*/

const acceptFriendHandle = async(req, res) => {
    const { id } = req.user;
    const { userId } = req.body;

    try {
        if(!userId) return res.status(404).json({message: "Request's ID is required"});

        const acceptedFriend = await acceptFriend(id, userId);

        if(!acceptedFriend) return res.status(404).json({message: "Couldn't accept the request"});

        return res.status(201).json(acceptedFriend)    
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default acceptFriendHandle