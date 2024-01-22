import getPostsById	 from "../../controllers/postsControllers/getPostsById.controller.js";

const getPostsByIdHandle = async(req, res) => {
    const user = req.user;
    const { userId } = req.body;

    try {
        if(!userId) return res.status(404).json({message: "Need the user's ID to see the posts"})

        const postsFound = await getPostsById({user, userId})

        if(!postsFound) return res.status(401).json({message: "Can't get posts"})

        return res.status(200).json(postsFound)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
}

export default getPostsByIdHandle