import { Router } from 'express';

const messagesRouter = Router()

messagesRouter.get("/", (req, res) => {
    return res.json({ message: "Hello World, we are in messagesRoutes" })
})

export default messagesRouter