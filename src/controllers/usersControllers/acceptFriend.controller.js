import User from '../../models/user.model.js';

const acceptFriend = async(id, userId) => {
    const userFound = await User.findById(id)
    const userSentRequest = await User.findById(userId)

    if(!userSentRequest) throw new Error("This user doesn't exist")

    if(!userFound) throw new Error("User not found");

    const friendFound = userFound.friends.filter((friend) => friend.toString() === userId)

    if(friendFound.length > 0) throw new Error(`${userSentRequest.username} is already your friend`) 

    if(!userFound.friendsRequests.includes(userId)) throw new Error("There isn't a user with this ID that made a request");

    userFound.friends.push(userSentRequest)

    userSentRequest.friends.push(userFound.id)

    const friendRequestFormatted = userFound.friendsRequests.filter((friend) => friend.toString() !== userId)

    const newUser = {
        ...userFound._doc,
        friendsRequests: [...friendRequestFormatted],
    }

    const updateUser = await User.findByIdAndUpdate(id, newUser, {new: true})

    await userSentRequest.save()

    return updateUser
}

export default acceptFriend