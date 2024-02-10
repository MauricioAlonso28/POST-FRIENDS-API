import User from '../../models/user.model.js';

/**
    * Function to ban a friend, removing them from the user's friend list and blocking further interactions.
    * 
    * @param {string} id - ID of the user performing the action.
    * @param {string} userId - ID of the user to be banned.
    * 
    * @returns {Promise<object>} - Returns the updated user after banning the specified friend.
    * 
    * @throws {Error} - Throws an error if the user to be banned or the performing user is not found,
    * if the performing user attempts to ban themselves, or if the user has already been banned.
*/

const banFriend = async(id, userId) => {
    const userFound = await User.findById(id)
    const userBanned = await User.findById(userId)

    if(!userBanned) throw new Error("This user doesn't exist")

    if(!userFound) throw new Error("User not found")

    if(userFound.id === userBanned.id) throw new Error("Can't make this action")

    const friendList = userFound.friends.filter((friend) => friend.toString() !== userId)

    const friendsRequestsFiltered = userFound.friendsRequests.filter((friend) => friend.toString() !== userId)

    if(userFound.bannedFriends.includes(userId)) throw new Error("Have you already banned this user")

    userFound.bannedFriends.push(userBanned.id)

    const newUser = {
        ...userFound._doc,
        friends: [...friendList],
        friendsRequests: [...friendsRequestsFiltered]
    }

    const updatedUser = await User.findByIdAndUpdate(id, newUser, {new: true})
    
    /**********************************/

    const friendListRemoved = userBanned.friends.filter((friend) => friend.toString() !== id)

    const friendsRequestsFilteredRemoved = userBanned.friendsRequests.filter((friend) => friend.toString() !== id)

    const newUserBanned = {
        ...userBanned._doc,
        friends: [...friendListRemoved],
        friendsRequests: [...friendsRequestsFilteredRemoved]
    }

    await User.findByIdAndUpdate(userId, newUserBanned, {new: true})

    /**********************************/

    return updatedUser
}

export default banFriend