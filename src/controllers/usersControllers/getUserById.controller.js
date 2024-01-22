import User from '../../models/user.model.js';
import mongoose from 'mongoose';

/**
    * Fetches a user by their ID from the database.
    * @param {string} id - The ID of the user to retrieve.
    * @returns {Promise<Object|null>} - A promise resolving to a user object if found, or null if not found or the ID is invalid.
*/

const getUserById = async (id) => {
    // Validate if the ID is valid
    if (!mongoose.Types.ObjectId.isValid(id)) return null

    const userFound = await User.findById(id);

    return userFound;
}

export default getUserById;