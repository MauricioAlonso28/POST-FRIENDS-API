import getUserByUsername from "../../controllers/usersControllers/getUserByUsername.controller.js";

/**
    * Handles HTTP requests to fetch users by username.
    *
    * @async
    * @param {Object} req - HTTP request object.
    * @param {Object} res - HTTP response object.
    * @returns {Object} - JSON response with the operation result.
*/

const getUserByUsernameHandle = async(req, res) => {
    const { username } = req.body;

    try {
        if (!username) return res.status(404).json({message: "Username is required"}) 

        const userFound = await getUserByUsername(username)

        if(!userFound.length) return res.status(404).json({message: "This username is not assigned to any user"})

        return res.status(200).json(userFound)
    } catch (error) {
        return res.status(500).json({messgae: "Internal Server Error: " + error.message})
    }
}

export default getUserByUsernameHandle