import User from '../../models/user.model.js';

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