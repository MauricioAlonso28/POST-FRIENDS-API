import removePost from "../../controllers/postsControllers/removePost.controller.js"

/**
    * Handler function to remove a post.
    * 
    * @param {object} req - Express request object.
    * @param {object} res - Express response object.
*/

const removePostHandle = async (req, res) => {
    const { id } = req.user
    const { postId } = req.body

    try {
        if (!id) return res.status(404).json({ message: "Must be logged in to make a post" })
        if (!postId) return res.status(404).json({ message: "You need an ID from this post" })

        const postRemoved = await removePost({ id, postId })

        if (!postRemoved) return res.status(400).json({ message: "Couldn't remove this post" })

        return res.status(201).json({ message: "The post was removed successfully!" })
    } catch (error) {
        return res.status(500).json({ message: "Internal Error Server: " + error.message })
    }
}

export default removePostHandle