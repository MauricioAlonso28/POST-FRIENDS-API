import User from '../../models/user.model.js';

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