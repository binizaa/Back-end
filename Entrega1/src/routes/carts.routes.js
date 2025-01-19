import { Router } from "express";

const cartsRouter = Router()
const carts = []

cartsRouter.get('/:cid', (req, res) => {

    const id = parseInt(req.params.cid)
    const selectedCart = carts.find(cart => cart.id === id)

    if(!selectedCart) return res.status(404).send({ status: 'Error', message: 'Product not found' });
    
    res.send(selectedCart)
})

cartsRouter.post('/', (req, res) => {
    const products = req.body;

    const newcart = {
        ...products, 
        id: carts.length > 0 ? carts[carts.length - 1].id + 1 : 1, 
    };

    carts.push(newcart);
    res.send({ status: 'success', message: 'cart added' });
});

cartsRouter.post('/:cid/product/:pid', (req, res) => {
    const { cid, pid } = req.params;
  
    const cart = carts.find((c) => c.cid === cid);
  
    if (!cart) {
      return res.status(404).json({ message: 'Cart not found' });
    }
  
    const existingProduct = cart.products.find(
      (p) => p.product === pid
    );
  
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      cart.products.push({ product: pid, quantity: 1 });
    }
  
    res.status(200).json({ message: 'Product added to cart', cart });
  });

export default cartsRouter;