import User from '../../models/user.model.js';

/**
    * Function to retrieve a list of friend requests for a given user.
    * 
    * @param {object} user - The authenticated user making the request.
    * @param {string} id - ID of the user whose friend requests are to be retrieved.
    * 
    * @returns {Promise<Array>} - Returns an array of friend requests with their IDs, usernames, and images.
    * 
    * @throws {Error} - Throws an error if the user to retrieve friend requests for, or the authenticated user, is not found,
    * if the authenticated user is not logged in, or if the authenticated user doesn't have access to make this request.
*/

const getAllRequests = async(user, id) => {
    const userFound = await User.findById(id)
    const authUser = await User.findById(user.id)

    if(!userFound) throw new Error("User not found")

    if(!authUser) throw new Error ("Have to be logged in to make this request")

    if(userFound.id !== authUser.id) throw new Error("Don't have access to make this request")

    const userRendered = await User.findById(id).populate('friendsRequests')
    
    if(!userRendered.friendsRequests.length) throw new Error("There aren't requests to show")

    const requestListRendered = userRendered.friendsRequests.map((friend) => {
        return {
            id: friend.id,
            username: friend.username,
            image: friend.image
        }
    })

    return requestListRendered
}

export default getAllRequests;