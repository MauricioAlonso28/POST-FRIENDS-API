import Post from '../../models/post.model.js'

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