import { TOKEN_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
import User from '../models/user.model.js';

const adminAuth = async(req, res, next) => {
    const { token } = req.cookies
    
    try {
        if(!token) return res.status(404).json({message: "Forbidden: Only admins can access this resource"})
        
        jwt.verify(token, TOKEN_SECRET, async (err, user) => {
            if(err) throw new Error(err)

            const userFound = await User.findById(user.id)
    
            req.user = userFound

            if(!userFound || userFound.role !== "admin") return res.status(404).json({message: "Only admins can access this resource"})

            next()
        })

    } catch (error) {
        return res.status(500).json({message: "Internal Server Error" + error.message})
    }
}

export default adminAuth