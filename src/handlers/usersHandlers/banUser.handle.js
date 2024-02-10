import dotenv from 'dotenv'

dotenv.configDotenv()

import banUser from "../../controllers/usersControllers/banUser.controller.js";
import { sendMail, createTransporter } from "../../emails/sendMail.js";
import mailOptionsUserBanned from "../../emails/schemas/banUser.noti.js";

/**
    * Handles HTTP requests to ban a user by updating the 'banned' property.
    *
    * @async
    * @param {Object} req - HTTP request object.
    * @param {Object} res - HTTP response object.
    * @returns {Object} - JSON response with the operation result.
*/

const { NODE_MAILER_USER, NODE_MAILER_PASSWORD } = process.env

const banUserHandle = async (req, res) => {
    const { id } = req.params

    try {
        if (!id) return res.status(404).json({ message: "ID is required" });

        const userFound = await banUser(id)

        if (!userFound) return res.status(404).json({ message: "User not found for the given ID" })

        await sendMail(createTransporter(NODE_MAILER_USER, NODE_MAILER_PASSWORD), mailOptionsUserBanned(userFound.username, userFound.email))

        return res.status(200).json({ message: "User banned succesfully!" })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error: " + error.message })
    }
}

export default banUserHandle;