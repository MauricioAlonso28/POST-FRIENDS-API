import Post from '../../models/post.model.js';
import User from '../../models/user.model.js';

/**
    * Function to create a new post.
    * 
    * @param {object} options - Object containing post details.
    * @param {string} options.message - Message content of the post.
    * @param {string} options.image - Image URL associated with the post.
    * @param {string} options.video - Video URL associated with the post.
    * @param {string} options.id - ID of the user creating the post.
    * 
    * @returns {Promise<object>} - Returns the newly created post with user information.
    * 
    * @throws {Error} - Throws an error if the user creating the post does not exist.
*/

const newPost = async ({ message, image, video, id }) => {
    const userFound = await User.findById(id)

    if (!userFound) throw new Error("This user does not exist")

    const newPost = new Post({
        message,
        image,
        video,
        user: id
    })

    const postSaved = await newPost.save()

    const postMade = await Post.findById(postSaved.id).populate('user')

    return postMade
}

export default newPost