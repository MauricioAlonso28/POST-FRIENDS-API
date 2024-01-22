/**
    * Handles user registration by saving user information to the database.
    * @param {Object} userData - User data including first name, last name, etc.
    * @returns {Promise<Object>} - Resolves with the newly created user object.
    * @throws {Error} - If the provided username or email already exists.
*/

import postUser from "../../controllers/usersControllers/postUser.controller.js";
import bcrypt from 'bcryptjs'
import createAccessToken from "../../libs/jwt.js";
import sendRegisterEmail from "../../emails/schemas/register.noti.js";

const postUserHandle = async (req, res) => {
    const { firstName, lastName, username, age, email, image, city, country, description, password } = req.body
    const cookie = req.cookies

    try {
        if (cookie.token) return res.status(400).json({ message: "There is someone logged in already, logout to register" })
        if (!firstName || !lastName || !username || !age || !email || !image || !city || !country || !password) return res.status(400).json({ message: "Neccesary data is missing" });

        const passwordHash = await bcrypt.hash(password, 10)

        const newUser = await postUser({ firstName, lastName, username, age, email, image, city, country, description, password: passwordHash })

        /* CREATE TOKEN */

        const token = await createAccessToken({
            id: newUser._id
        })

        res.cookie('token', token)

        sendRegisterEmail(email, username)

        return res.status(201).json(newUser)

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error: " + error.message })
    }
}

export default postUserHandle