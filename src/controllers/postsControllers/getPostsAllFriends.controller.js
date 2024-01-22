import User from '../../models/user.model.js'
import Post from '../../models/post.model.js'

const getPostsAllFriends = async (id) => {
    const user = await User.findById(id).select('friends')
    const idFriends = [...user.friends]

    let postsFriends = []
    for (let i = 0; i < idFriends.length; i++) {
        const post = await Post.find({ user: idFriends[i] }).populate('user')

        postsFriends = [...postsFriends, ...post]
    }

    if (!postsFriends.length) throw new Error("There aren't posts to show")

    const postsFoundFormatted = postsFriends.map((post) => {
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

export default getPostsAllFriends