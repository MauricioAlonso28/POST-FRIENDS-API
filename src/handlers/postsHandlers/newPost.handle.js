import newPost from "../../controllers/postsControllers/newPost.controller.js";

const newPostHandle = async(req, res) => {
    const { message, image, video } = req.body
    const { id } = req.user
    
    try {
        if(!message) return res.status(404).json({message: "Message is required"})
        if(!id) return res.status(404).json({message: "Must be logged in to make a post"})

        const postMade = await newPost({message, image, video, id})

        if(!postMade) return res.status(400).json({message: "Couldn't make a post"})

        return res.status(201).json({message: "You made a post successfully"})
    } catch (error) {
        return res.status(500).json({message: "Internal Error Server: " + error.message})
    }
} 

export default newPostHandle