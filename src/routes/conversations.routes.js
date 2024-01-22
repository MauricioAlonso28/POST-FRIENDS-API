import { Router } from 'express';

const conversationsRouter = Router()

conversationsRouter.get("/", (req, res) => {
    return res.json({ message: "Hello World, we are in conversationsRoutes" })
})

export default conversationsRouter