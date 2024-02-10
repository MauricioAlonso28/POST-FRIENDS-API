import User from '../../models/user.model.js';

/**
    * Function to unban a friend, removing them from the user's banned list.
    * 
    * @param {string} id - ID of the user performing the unbanning.
    * @param {string} userId - ID of the user to be unbanned.
    * 
    * @returns {Promise<object>} - Returns the updated user after unbanning the friend.
    * 
    * @throws {Error} - Throws an error if the user to be unbanned or the performing user is not found,
    * if the specified user is not in the banned list, or if there are issues updating the database.
*/

const unbanFriend = async(id, userId) => {
    const userFound = await User.findById(id)
    const userUnbanned = await User.findById(userId)

    if(!userUnbanned) throw new Error("This user doesn't exist")

    if(!userFound) throw new Error("User not found")

    if(!userFound.bannedFriends.includes(userId)) throw new Error("This user isn't in your banned list")

    const bannedFriendFiltered = userFound.bannedFriends.filter((friend) => friend.toString() !== userId)

    const newUser = {
        ...userFound._doc,
        bannedFriends: [...bannedFriendFiltered]
    }

    const userUpdated = await User.findByIdAndUpdate(id, newUser, {new: true})

    return userUpdated
}

export default unbanFriend