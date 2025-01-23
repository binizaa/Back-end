import ProductManager from './ProductManager.js';
import express from 'express'
import productsRouter from './routes/products.routes.js';
import cartsRouter from './routes/carts.routes.js';

const manager = new ProductManager('./src/products.json');
let products = await manager.getProducts();

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

app.listen(PORT, () => {
    console.log('Listening on port 8080')
})