import jwt from 'jsonwebtoken'
import { TOKEN_SECRET } from "../config.js";

/**
    * Creates an access token using the provided payload.
    *
    * @param {Object} payload - The payload to be included in the token.
    * @returns {Promise<string>} - The generated JWT token.
*/

const createAccessToken = (payload) => {
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, 
            TOKEN_SECRET,  
            {
                expiresIn: "30d"
            }, (err, token) => {
                if(err) reject(err);
                resolve(token);
            }
        )
    })


}

export default createAccessToken