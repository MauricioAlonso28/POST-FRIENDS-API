import User from '../../models/user.model.js';

/**
    * Function to delete a friend request made by another user.
    * 
    * @param {string} id - ID of the user who is deleting the friend request.
    * @param {string} userId - ID of the user who made the friend request.
    * 
    * @returns {Promise<object>} - Returns the updated user after deleting the friend request.
    * 
    * @throws {Error} - Throws an error if the user who made the request or the deleting user is not found,
    * or if there is no friend request from the specified user.
*/

const deleteFriendRequest = async(id, userId) => {
    const userFound = await User.findById(id)
    const userMakerOfRequest = await User.findById(userId)

    if(!userMakerOfRequest) throw new Error("This user doesn't exist")

    if(!userFound) throw new Error("User not found");

    if(!userFound.friendsRequests.includes(userId)) throw new Error("There isn't a user with this ID that made a request");

    const usersFormatted = userFound.friendsRequests.filter((friend) => friend.toString() !== userId)

    const newUser = {
        ...userFound._doc,
        friendsRequests: [...usersFormatted]
    }
    
    const updatedUser = await User.findByIdAndUpdate(id, newUser, {new: true})

    return updatedUser
}

export default deleteFriendRequest