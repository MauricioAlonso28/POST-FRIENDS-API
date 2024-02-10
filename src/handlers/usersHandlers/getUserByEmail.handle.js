import getUserByEmail from "../../controllers/usersControllers/getUserByEmail.controller.js";

/**
    * Handles the request to fetch users by email.
    * @param {Object} req - Express request object.
    * @param {Object} res - Express response object.
    * @returns {Promise<void>}
*/

const getUserByEmailHandle = async(req, res) => {
    const { email } = req.body;
    
    try {
        if(!email) return res.status(404).json({message: "Email is required!"});

        const usersFound = await getUserByEmail({ email });

        return res.status(200).json(usersFound);        
    } catch (error) {
        return res.status(500).json({message: "Internal Server Error: " + error.message});
    }
} 

export default getUserByEmailHandle;