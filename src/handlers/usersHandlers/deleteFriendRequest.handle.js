import deleteFriendRequest from "../../controllers/usersControllers/deleteFriendRequest.controller.js";

const deleteFriendRequestHandle = async(req, res) => {
    const { id } = req.user;
    const { userId } = req.body;
    
    try {
        if(!userId) return res.status(404).json({message: "Request's ID is required"})

        const userFormattedRequests = await deleteFriendRequest(id, userId)

        if(!userFormattedRequests) return res.status(400).json({message: "Couldn't delete the request"})
    
        return res.status(201).json(userFormattedRequests)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default deleteFriendRequestHandle