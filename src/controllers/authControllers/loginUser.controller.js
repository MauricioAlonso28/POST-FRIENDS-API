/**
    * loginUser - Asynchronous function for authenticating a user.
    *
    * @param {object} credentials - User credentials for logging in.
    * @param {string} credentials.email - User's email address.
    * @param {string} credentials.password - User's password.
    *
    * @returns {Promise<object>} - Returns a user object if authentication is successful.
    * @throws {Error} - Throws an error if no user is found with the given email address
    *                  or if the provided password does not match.
*/

import User from '../../models/user.model.js'
import bcrypt from 'bcryptjs';

const loginUser = async ({ email, password }) => {
    const userFound = await User.findOne({ email })

    if (!userFound) throw new Error("This email is not assigned to any user") 
    
    if(userFound.banned) throw new Error("You are banned. Can't login")

    const isMatch = await bcrypt.compare(password, userFound.password)

    if (!isMatch) throw new Error("Incorrect password")

    return userFound
}

export default loginUser