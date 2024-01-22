import Post from '../../models/post.model.js'

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