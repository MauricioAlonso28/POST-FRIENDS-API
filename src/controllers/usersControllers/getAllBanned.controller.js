import User from '../../models/user.model.js';

/**
    * Function to retrieve a list of all banned friends for a given user.
    * 
    * @param {object} user - The authenticated user making the request.
    * @param {string} id - ID of the user whose banned friends are to be retrieved.
    * 
    * @returns {Promise<Array>} - Returns an array of banned friends with their IDs, usernames, and images.
    * 
    * @throws {Error} - Throws an error if the user to retrieve banned friends for, or the authenticated user, is not found,
    * if the authenticated user is not logged in, or if the authenticated user doesn't have access to make this request.
*/

const getAllBannedFriends = async(user, id) => {
    const userFound = await User.findById(id)
    const authUser = await User.findById(user.id)

    if(!userFound) throw new Error("User not found")

    if(!authUser) throw new Error ("Have to be logged in to make this request")

    if(userFound.id !== authUser.id) throw new Error("Don't have access to make this request")

    const userRendered = await User.findById(id).populate('bannedFriends')

    if(!userRendered.bannedFriends.length) throw new Error("There aren't requests to show")

    const bannedListRendered = userRendered.bannedFriends.map((friend) => {
        return {
            id: friend.id,
            username: friend.username,
            image: friend.image
        }
    })

    return bannedListRendered
}

export default getAllBannedFriends