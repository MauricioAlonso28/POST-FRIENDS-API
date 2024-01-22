import User from '../../models/user.model.js';

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