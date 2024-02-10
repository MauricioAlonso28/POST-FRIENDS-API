import unbanUser from "../../controllers/usersControllers/unbanUser.controller.js";

import dotenv from 'dotenv'

dotenv.configDotenv()

import { sendMail, createTransporter } from "../../emails/sendMail.js";
import mailOptionsUserUnban from "../../emails/schemas/unbanUser.noti.js";

const { NODE_MAILER_USER, NODE_MAILER_PASSWORD } = process.env

/**
    * Handles HTTP requests to unban a user by updating the 'banned' property.
    *
    * @async
    * @param {Object} req - HTTP request object.
    * @param {Object} res - HTTP response object.
    * @returns {Object} - JSON response with the operation result.
*/

const unbanUserHandle = async (req, res) => {
    const { id } = req.params;

    try {
        if (!id) return res.status(404).json({ message: "ID is required" });

        const userFound = await unbanUser(id)

        if (!userFound) return res.status(404).json({ message: "User not found for the given ID" })

        await sendMail(createTransporter(NODE_MAILER_USER, NODE_MAILER_PASSWORD), mailOptionsUserUnban(userFound.username, userFound.email))

        return res.status(200).json({ message: "User restore succesfully!" })
    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error: " + error.message })
    }
}

export default unbanUserHandle