/**
    * Logs out the user by clearing the access token cookie.
    * @param {Object} req - Express request object.
    * @param {Object} res - Express response object.
    * @returns {Object} - JSON response indicating the logout status.
*/

const logoutUser = (req, res) => {
    const { token } = req.cookies

    try {
        if (!token) throw new Error('No token provided')
        
        res.cookie("token", "", {
            expires: new Date(0),
            httpOnly: true,
            sameSite: 'strict' 
        })

        req.user = null

        return res.status(200).json({ message: "Logout successfully"})
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error: " + error.message })
    }
}

export default logoutUser