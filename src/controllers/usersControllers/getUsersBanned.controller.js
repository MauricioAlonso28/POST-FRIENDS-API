import User from '../../models/user.model.js';

/**
    * Retrieves users who are banned from the database.
    * @returns {Promise<Array>} A Promise that resolves to an array of banned user objects.
    * @throws {Error} DatabaseError if there is an issue accessing the database.
*/

const getUsersBanned = async() => {
    const usersFound = await User.find({banned: true});

    return usersFound
}

export default getUsersBanned