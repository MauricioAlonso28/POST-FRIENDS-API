import sendFriendRequest from "../../controllers/usersControllers/sendFriendRequest.controller.js";

/**
    * Handler function to send a friend request.
    * 
    * @param {object} req - Express request object.
    * @param {object} res - Express response object.
*/

const sendFriendRequestHandle = async(req, res) => {
    const { id } = req.params;
    const user = req.user;

    try {
        const requestSent = await sendFriendRequest({user, id})

        if(!requestSent) return res.status(404).json({message: "Can't make the request"})

        return res.status(201).json(requestSent)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default sendFriendRequestHandle