import User from '../../models/user.model.js';

/**
    * Retrieves all users from the database.
    * @returns {Promise<Array>} A Promise that resolves to an array of user objects
    * @throws {Error} DatabaseError if there is an issue accessing the database.
*/

const getAllUsers = async ({role, status}) => {  

    const selectorRole = role ? {role} : null;
    const selectorStatus = 
        status === "true"
            ? true
            : status === "false"
                ? false
                : null;

    const query = {
        ...selectorRole,
        ...(selectorStatus !== null && { banned: selectorStatus }),
    };

    const allUsers = await User.find(query)

    if(!allUsers) throw new Error("Database Error")

    return allUsers
}

export default getAllUsers