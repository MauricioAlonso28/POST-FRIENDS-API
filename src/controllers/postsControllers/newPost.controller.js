import Post from '../../models/post.model.js';
import User from '../../models/user.model.js';

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