import User from '../../models/user.model.js';

/**
    * Finds users by username in the database.
    *
    * @async
    * @param {string} username - The username to search for matches.
    * @returns {Promise<Array>} - An array of users matching the username.
    * @throws {Error} - Throws an error if any issues occur during the search.
*/

const getUserByUsername = async (username, id) => {
    const userFound = await User.find({ username: { $regex: `^${username}`, $options: 'i' } })

    return userFound
}

export default getUserByUsername;