import User from '../../models/user.model.js';

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