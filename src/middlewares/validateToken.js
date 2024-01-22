import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
import User from '../models/user.model.js';

const authRequired = async(req, res, next) => {
    const { token } = req.cookies
    
    try {
        if(!token) return res.status(404).json({message: "Forbidden: Must be logged in to access this resource"})
        
        jwt.verify(token, TOKEN_SECRET, async (err, user) => {
            if(err) throw new Error(err)

            const userFound = await User.findById(user.id)
    
            if(userFound.banned) return res.status(400).json({message: "You are banned. Can't make this action."})

            req.user = userFound

            next()
        })

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error" + error.message})
    }
}

export default authRequired