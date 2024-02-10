import updatePost from "../../controllers/postsControllers/updatePost.controller.js"

/**
    * Handler function to update a post.
    * 
    * @param {object} req - Express request object.
    * @param {object} res - Express response object.
*/

const updatePostHandle = async (req, res) => {
    const { message } = req.body
    const { id } = req.user
    const { postId } = req.params

    try {
        console.log(message, postId);
        if (!id) return res.status(404).json({ message: "Must be logged in to make a post" })
        if (!message || !postId) return res.status(404).json({ message: "Message is required" })

        const updatedPost = await updatePost({ message, id, postId })

        if (!updatedPost) return res.status(401).json({ message: "Cannot update post" })

        return res.status(201).json(updatedPost)
    } catch (error) {
        return res.status(500).json({ message: "Internal Error Server: " + error.message })
    }
}

export default updatePostHandle