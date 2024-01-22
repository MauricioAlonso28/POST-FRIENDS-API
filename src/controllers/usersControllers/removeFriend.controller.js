import User from '../../models/user.model.js';

const removeFriend = async(id, userId) => {
    const userFound = await User.findById(id)
    const userRemoved = await User.findById(userId)

    if(!userRemoved) throw new Error("This user doesn't exist")

    if(!userFound) throw new Error("User not found")

    if(!userFound.friends.includes(userId)) throw new Error("This user isn't in your friend list")

    const friendsFormatted = userFound.friends.filter((friend) => friend.toString() !== userId)
    
    const newUser = {
        ...userFound._doc,
        friends: [...friendsFormatted]
    }
    
    
    const updatedUser = await User.findByIdAndUpdate(id, newUser, {new: true})
    
    /**********************************/

    const friendsFormattedRemoved = userRemoved.friends.filter((friend) => friend.toString() !== id)
    
    const newUserRemoved = {
        ...userRemoved._doc,
        friends: [...friendsFormattedRemoved],
    }

    await User.findByIdAndUpdate(userId, newUserRemoved, {new: true})

    /**********************************/

    return updatedUser
}

export default removeFriend