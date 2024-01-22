import User from '../../models/user.model.js';

/**
    * Updates the 'banned' property of a user by their ID.
    *
    * @async
    * @param {string} id - The ID of the user to ban.
    * @returns {Promise<Object>} - The updated user object.
    * @throws {Error} - Throws an error if the user is already banned or if any issues occur during the update.
*/

const banUser = async(id) => {
    const userFoundBanned = await User.findById(id)

    if(userFoundBanned.banned) throw new Error("This user is already banned")

    const userFound = await User.findByIdAndUpdate(id, {banned: true}, {new: true})

    return userFound;
}

export default banUser;