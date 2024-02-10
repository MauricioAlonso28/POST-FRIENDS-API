import getAllRequests from "../../controllers/usersControllers/getAllRequests.controller.js";

/**
    * Handler function to get the list of all friend requests.
    * 
    * @param {object} req - Express request object.
    * @param {object} res - Express response object.
*/

const getAllRequestsHandle = async(req, res) => {
    const user = req.user
    const { id } = req.params; 

    try {
        if(!id) return res.status(404).json({message: "User's ID is required"})

        const requestsList = await getAllRequests(user, id)

        if(!requestsList) return res.status(404).json({message: "Can't get a requestlist"})

        return res.status(200).json(requestsList)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default getAllRequestsHandle