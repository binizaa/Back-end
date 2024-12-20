import ProductManager from './ProductManager.js';
import Product from './Product.js';
import express from 'express'

const manager = new ProductManager('./src/products.json');
let products = await manager.getProducts();

const app = express()
/** Important for parsing form data */
app.use(express.urlencoded({ extended: true }));

app.get('/products', (req, res) => {
    const limit = parseInt(req.query.limit); 

    if (!isNaN(limit)) {
        return res.send({ products: products.slice(0, limit) });
    }

    res.send({ products });
});

app.get('/products/:id', (req, res) => {

    const id = parseInt(req.params.id)
    const selectedProduct = products.find(product => product.id === id)

    if(!selectedProduct) return res.send("Product not found")
    
        res.send({selectedProduct})
})

app.listen(8080, () => {
    console.log('Listening on port 8080')
})