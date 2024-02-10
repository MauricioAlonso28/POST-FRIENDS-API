import Post from '../../models/post.model.js'

/**
    * Function to remove a post.
    * 
    * @param {object} options - Object containing user and post IDs.
    * @param {string} options.id - ID of the user removing the post.
    * @param {string} options.postId - ID of the post to be removed.
    * 
    * @returns {Promise<object>} - Returns the removed post.
    * 
    * @throws {Error} - Throws an error if the specified post doesn't exist or cannot be removed.
*/

const removePost = async ({ id, postId }) => {
    const postsFound = await Post.find({ user: id }).populate('user')
    const postsIds = postsFound.map((post) => {
        return post.id
    })

    if (!postsIds.includes(postId)) throw new Error("This post doesn't exist")

    const postFound = await Post.findByIdAndDelete(postId)

    if (!postFound) throw new Error("Cannot remove this post")

    return postFound
}

export default removePost