import User from '../../models/user.model.js';

/**
    * Updates the 'banned' property of a user to false, indicating the user is unbanned.
    *
    * @async
    * @param {string} id - The ID of the user to unban.
    * @returns {Promise<Object>} - The updated user object.
    * @throws {Error} - Throws an error if the user is not banned or if any issues occur during the update.
*/

const unbanUser = async(id) => {
    const userFoundUnbanned = await User.findById(id)

    if(!userFoundUnbanned.banned) throw new Error("This user isn't banned")

    const userFound = await User.findByIdAndUpdate(id, {banned: false}, {new: true})

    return userFound
}

export default unbanUser