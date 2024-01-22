import getAllUsers from "../../controllers/usersControllers/getAllUsers.controller.js"

/**
    * Handles the request to get all users.
    * @param {Object} req - Express request object.
    * @param {Object} res - Express response object.
    * @returns {Promise<void>}
*/


const getAllUsersHandle = async (req, res) => {
    const { role, status } = req.body

    try {
        const allUsers = await getAllUsers({role, status})
        
        if(!allUsers.length) return res.status(404).json({message: "No content"})

        return res.status(200).json(allUsers)
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error: " + error.message})
    }
}

export default getAllUsersHandle