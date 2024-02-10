import User from '../../models/user.model.js';
import Post from '../../models/post.model.js';

/**
    * Function to retrieve and format posts by user ID.
    * 
    * @param {object} user - Object representing the requesting user.
    * @param {string} user.id - ID of the requesting user.
    * @param {string} userId - ID of the user whose posts are being retrieved.
    * 
    * @returns {Promise<Array>} - Returns an array of formatted posts by the specified user in descending order by creation date.
    * 
    * @throws {Error} - Throws an error if the specified user is not found, if the requesting user is not friends with the specified user,
    *                  or if there are no posts to show.
*/

const getPostsById = async({user, userId}) => {
    const userFoundAsk = await User.findById(user.id)
    const userFoundGive = await User.findById(userId)

    if(!userFoundGive) throw new Error("User not found")

    if(userFoundAsk.id !== userFoundGive.id && !userFoundGive.friends.includes(userFoundAsk.id)) throw new Error("Just friends or User can see this posts")

    const postsFound = await Post.find({ user: userId}).populate('user')

    if(!postsFound.length) throw new Error("There aren't posts to show")

    const postsFoundFormatted = postsFound.map((post) => {
        const date = new Date(post.createdAt) 

        const newPost = {
            ...post._doc,
            user: {
                id: post.user._id,
                username: post.user.username,
                image: post.user.image
            },
            createdAt: date
        }

        return newPost
    })

    const postsInOrder = postsFoundFormatted.sort((a, b) => b.createdAt - a.createdAt)
    
    const postsInOrderFormatted = postsInOrder.map((post) => {
        return {
            ...post,
            createdAt: post.createdAt.toLocaleString()
        }
    })

    return postsInOrderFormatted
}

export default getPostsById