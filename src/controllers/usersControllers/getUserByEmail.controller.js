/**
    * Fetches users by email.
    * @param {Object} options - Search options.
    * @param {string} options.email - Email to search for.
    * @returns {Promise<Array>} - An array of found users.
    * @throws {Error} - Throws an error if no users are found.
*/

import User from "../../models/user.model.js";

const getUserByEmail = async({ email }) => {
    let usersFound;

    const isFullEmail = email.includes('@');

    if(isFullEmail) {
        usersFound = await User.find({ email: { $regex: '^' + email + '$', $options: 'i' }});
    } else {
        usersFound = await User.find({ email: { $regex: `^${email}`, $options: 'i' } });
    } 

    if(!usersFound.length) throw new Error("This email is not assigned to any user");

    return usersFound;
}

export default getUserByEmail;