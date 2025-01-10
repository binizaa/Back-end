import { Router } from "express";

const productsRouter = Router()
const products = []

productsRouter.get('/', (req, res) => {
    const limit = parseInt(req.query.limit); 

    if (!isNaN(limit)) {
        return res.send({ products: products.slice(0, limit) });
    }

    res.send({ products });
});

productsRouter.get('/:id', (req, res) => {

    const id = parseInt(req.params.id)
    const selectedProduct = products.find(product => product.id === id)

    if(!selectedProduct) return res.send("Product not found")
    
        res.send({selectedProduct})
})

productsRouter.post('/', (req, res) => {
    const product = req.body;

    const newProduct = {
        ...product, 
        id: products.length > 0 ? products[products.length - 1].id + 1 : 1, 
    };

    products.push(newProduct);
    res.send({ status: 'success', message: 'Product added' });
});

productsRouter.put('/:productId', (req, res) => {
    const productId = +req.params.productId
    const productInfo = req.body
    const productIndex = 0
    let product = product.find((product, index) => {
        productIndex = index
        return product.id === productId
    })

    if(!product) return res.status(404).send({status: 'Error', message: 'product not found'}) 
    
    product = {
        ...productInfo,
        id: product.id
    }

    products[productIndex] = product
    res.send({status: 'Success', message: 'product updated'})
})

productsRouter.delete('/:productId', (req, res) => {
    const productId = + req.params.productId
    const productsUpdated = products.filter(u => u.id !== productId)
    products = [...productsUpdated]
    res.send({status: 'Success', payload: productsUpdated})
})

export default productsRouter;