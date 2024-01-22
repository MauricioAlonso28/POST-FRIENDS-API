import getAllBannedFriends from "../../controllers/usersControllers/getAllBanned.controller.js";

const getAllBannedFriendsHandle = async(req, res) => {
    const user = req.user
    const { id } = req.params; 

    try {
        if(!id) return res.status(404).json({message: "User's ID is required"})

        const bannedList = await  getAllBannedFriends(user, id)

        if(!bannedList) return res.status(404).json({message: "Can't get a bannedlist"})

        return res.status(200).json(bannedList)
        
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default getAllBannedFriendsHandle