import Post from '../../models/post.model.js'

/**
    * Function to update an existing post.
    * 
    * @param {object} options - Object containing details of the post to update.
    * @param {string} options.id - ID of the user performing the update.
    * @param {string} options.message - New content of the post's message.
    * @param {string} options.postId - ID of the post to be updated.
    * 
    * @returns {Promise<object>} - Returns the updated post.
    * 
    * @throws {Error} - Throws an error if the post is not found or if the user doesn't have permission to update.
*/

const updatePost = async ({ id, message, postId }) => {
    const postFound = await Post.findById(postId)

    if (!postFound) throw new Error("Post not found")
    if (postFound.user.toString() !== id) throw new Error("Cannot make this update. This is not your post")

    const newPost = {
        ...postFound._doc,
        message: message
    }

    const postUpdated = await Post.findByIdAndUpdate(postId, newPost, { new: true })

    return postUpdated
}

export default updatePost