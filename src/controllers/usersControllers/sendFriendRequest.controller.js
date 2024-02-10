import User from '../../models/user.model.js';

/**
    * Function to send a friend request from one user to another.
    * 
    * @param {object} options - Object containing details of the friend request.
    * @param {object} options.user - The authenticated user sending the request.
    * @param {string} options.id - ID of the user to whom the friend request is being sent.
    * 
    * @returns {Promise<object>} - Returns the updated user after sending the friend request.
    * 
    * @throws {Error} - Throws an error if the sending user or the user to send the request to is not found,
    * if the sending user attempts to send a request to themselves, if a request has already been sent, 
    * if the specified user is already a friend, or if the specified user has banned the sending user.
*/

const sendFriendRequest = async({user, id}) => {
    const sendingUser = await User.findById(user.id)
    const getUser = await User.findById(id)

    if(!sendingUser) throw new Error("Can't make a friend's request")

    if(sendingUser.id === getUser.id) throw new Error("Can't send a request to this user");

    if(getUser.friendsRequests.includes(sendingUser.id)) throw new Error("Have you already sent a friend request to this user");

    if(getUser.friends.includes(sendingUser.id)) throw new Error("This user is already your friend")

    if(getUser.bannedFriends.includes(sendingUser.id)) throw new Error("This user has banned you")

    getUser.friendsRequests.push(sendingUser.id);
    
    const newUser = {
        ...getUser._doc,
    }

    const sentUser = await User.findByIdAndUpdate(id, newUser, {new: true});

    return sentUser
}

export default sendFriendRequest