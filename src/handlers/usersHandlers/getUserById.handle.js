import getUserById from "../../controllers/usersControllers/getUserById.controller.js";

/**
    * Handles the request to get a user by their ID.
    * @param {Object} req - Request object.
    * @param {Object} res - Response object.
    * @returns {Object} - JSON response containing the found user or an error message.
*/

const getUserByIdHandle = async (req, res) => {
    const { id } = req.params;

    try {
        if(!id) return res.status(404).json({message: "Id is required"});

        const userFound = await getUserById(id)

        if (!userFound) return res.status(404).json({ message: "User not found" })
        
        return res.status(200).json(userFound)
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error: " + error.message})
    }
}

export default getUserByIdHandle