import getAllfriends from "../../controllers/usersControllers/getAllFriends.controller.js";

const getAllFriendsHandle = async(req, res) => {
    const user = req.user
    const { id } = req.params; 

    try {
        if(!id) return res.status(404).json({message: "User's ID is required"})

        const friendList = await getAllfriends(user, id)

        if(!friendList) return res.status(404).json({message: "Can't get a friendlist"})

        return res.status(200).json(friendList)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default getAllFriendsHandle;