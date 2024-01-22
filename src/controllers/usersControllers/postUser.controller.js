/**
    * Manages user registration, hashes the password, and creates an access token.
    * @param {Object} req - Express request object.
    * @param {Object} res - Express response object.
    * @returns {Promise<void>} - Resolves after handling the registration process.
*/

import User from '../../models/user.model.js'

const postUser = async ({firstName, lastName, username, age, email, image, city, country, description, password}) => {
    const usernameExisting = await User.findOne({ username })
    const emailExisting = await User.findOne({ email })

    if (usernameExisting) throw new Error("This username already exists.") 
    if (emailExisting) throw new Error("This email is already used");

    const newUser = new User({
        firstName,
        lastName,
        username,
        age,
        email,
        image,
        city,
        country,
        description,
        password
    })

    const userSaved = await newUser.save()

    return userSaved
}

export default postUser