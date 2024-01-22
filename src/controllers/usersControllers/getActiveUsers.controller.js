import User from '../../models/user.model.js'

/**
    * Retrieves active users from the database who are not banned.
    * @returns {Promise<Array>} A Promise that resolves to an array of active user objects.
    * @throws {Error} DatabaseError if there is an issue accessing the database.
*/


const getActiveUsers = async () => {
    const usersFound = await User.find({ banned: false})

    return usersFound
}

export default getActiveUsers