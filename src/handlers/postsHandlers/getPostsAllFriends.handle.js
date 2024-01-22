import getPostsAllFriends from "../../controllers/postsControllers/getPostsAllFriends.controller.js";

const getPostsAllFriendsHandle = async(req,res) => {
    const { id } = req.user

    try {
        const postsFound = await getPostsAllFriends(id)

        if(!postsFound) return res.status(400).json("Can't get posts")

        return res.status(200).json(postsFound)
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + message})
    }
} 

export default getPostsAllFriendsHandle