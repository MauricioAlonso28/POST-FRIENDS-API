import banFriend from "../../controllers/usersControllers/banFriend.controller.js";

const banFriendHandle = async(req, res) => {
    const { id } = req.user
    const { userId } = req.body;
    
    try {
        if(!userId) return res.status(404).json({message: "User's ID is required"});

        const userFound = await banFriend(id, userId)

        if(!userFound) return res.status(404).json({message: "Couldn't ban this user"});

        return res.status(201).json(userFound)        
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default banFriendHandle