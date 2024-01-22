import User from'../../models/user.model.js';

/**
    * Updates a user in the database based on the provided user ID and updated user data.
    *
    * @async
    * @param {Object} options - Options for updating the user.
    * @param {string} options.id - The ID of the user to be updated.
    * @param {Object} options.updatedUser - The updated user data.
    * @param {string} options.role - The role of the user making the update request.
    * @returns {Promise<Object>} - A Promise that resolves to the updated user.
    * @throws {Error} - Throws an error if the user is not found or if an unauthorized user attempts to become an admin.
*/

const updateUser = async({ id, updatedUser, role }) => {
    const userFound = await User.findById(id)

    if(!userFound) throw new Error("User not found")

    if(role !== "admin" && userFound.role !== "admin" && updatedUser.role === "admin") throw new Error("Dont't have access to become in admin")

    const userUpdated = await User.findByIdAndUpdate(id, updatedUser, {new: true});

    return userUpdated
}

export default updateUser