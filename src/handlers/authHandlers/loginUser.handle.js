/**
    * Handles user login, validates credentials, and generates an access token.
    * @param {Object} req - Express request object.
    * @param {Object} res - Express response object.
    * @returns {Promise<void>} - Resolves after handling the login process.
*/

import loginUser from '../../controllers/authControllers/loginUser.controller.js';
import createAccessToken from '../../libs/jwt.js';

const loginUserHandle = async (req, res) => {
    const { email, password } = req.body
    const cookie = req.cookies

    try {
        if(cookie.token) return res.status(400).json({message: "There is an account already logged in"})
        const userFound = await loginUser({ email, password })

        if(!userFound) return res.status(400).json(["User not found"])

        const token = await createAccessToken({ 
            id: userFound._id 
        })

        res.cookie('token', token)
        
        return res.status(200).json({
            id: userFound._id,
            username: userFound.username,
            image: userFound.image
        })
        
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error: " + error.message })
    }
}

export default loginUserHandle