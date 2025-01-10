import { Router } from "express";

const cartsRouter = Router()
const carts = []

cartsRouter.get('/', (req, res) => {
    res.send({message: 'success', payload: carts})
})

export default cartsRouter;