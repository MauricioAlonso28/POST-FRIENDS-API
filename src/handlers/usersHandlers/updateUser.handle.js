import updateUser from "../../controllers/usersControllers/updateUser.controller.js";

/**
    * Handle for updating a user based on the provided user ID and updated user data.
    *
    * @async
    * @param {Object} req - Express request object.
    * @param {Object} res - Express response object.
    * @returns {Object} - JSON response indicating success or failure.
    * @throws {Object} - JSON response indicating an error if any issues occur during the update.
*/

const updateUserHandle = async(req, res) => {
    const { id } = req.params;
    const updatedUser = req.body;
    const { role } = req.user;

    try {
        if(!id) return res.status(404).json({message: "ID is required"});
        
        const userUpdated = await updateUser({id, updatedUser, role})
        
        if(!userUpdated) return res.status(400).json({message: "User not found"})

        return res.status(200).json(userUpdated)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default updateUserHandle