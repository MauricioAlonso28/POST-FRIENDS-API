import User from '../../models/user.model.js';

/**
    * Function to retrieve a list of friends for a given user.
    * 
    * @param {object} user - The authenticated user making the request.
    * @param {string} id - ID of the user whose friends are to be retrieved.
    * 
    * @returns {Promise<Array>} - Returns an array of friends with their IDs, usernames, and images.
    * 
    * @throws {Error} - Throws an error if the user to retrieve friends for, or the authenticated user, is not found,
    * if the authenticated user is not logged in, or if the authenticated user doesn't have access to see this friend list.
*/

const getAllfriends = async(user, id) => {
    const userFound = await User.findById(id)
    const authUser = await User.findById(user.id)

    if(!userFound) throw new Error("User not found")

    if(!authUser) throw new Error ("Have to be logged in to make this request")
    
    if(userFound.id !== authUser.id && !userFound.friends.includes(authUser.id)) throw new Error("Don't have acces to see this friend list")

    const userRendered = await User.findById(id).populate('friends')

    if(!userRendered.friends.length) throw new Error("There aren't friends to show")

    const friendListRendered = userRendered.friends.map((friend) => {
        return {
            id: friend.id,
            username: friend.username,
            image: friend.image
        }
    })

    return friendListRendered
}

export default getAllfriends