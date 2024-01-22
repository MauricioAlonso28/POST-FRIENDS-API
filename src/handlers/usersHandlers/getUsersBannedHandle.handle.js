import getUsersBanned from "../../controllers/usersControllers/getUsersBanned.controller.js";

/**
    * Handles the request to retrieve banned users and sends an appropriate HTTP response.
    * @param {Object} req - Express request object.
    * @param {Object} res - Express response object.
    * @returns {Promise<void>} A Promise that resolves when the response is sent.
*/

const getUsersBannedHandle = async (req, res) => {
    try {
        const usersFound = await getUsersBanned()

        if(!usersFound.length) return res.status(404).json({message: "There aren't users banned"});

        return res.status(200).json(usersFound)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default getUsersBannedHandle 