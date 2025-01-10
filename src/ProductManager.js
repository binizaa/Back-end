import fs from 'fs';

class ProductManager {
    constructor(path) {
        this.path = path;
        this.products = [];
    }

    async addProduct(product) {
        try {
            this.products = await this.getProducts();

            const existingProduct = this.products.find(p => p.code === product.code);
            if (existingProduct) {
                console.error(`Error: El producto con el código "${product.code}" ya existe y no se puede agregar.`);
                return;
            }

            product.id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;

            this.products.push(product);

            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2), 'utf-8');
            console.log("Product added successfully:", product);
        } catch (error) {
            console.error("Error adding product:", error);
        }
    }

    async getProducts() {
        try {
            const result = await fs.promises.readFile(this.path, 'utf-8');
            return JSON.parse(result);
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.warn("File not found. Returning an empty product list.");
            } else {
                console.error("Error reading the file:", error);
            }
            return [];
        }
    }

    async getProductById(id) {
        try {
            this.products = await this.getProducts();

            const product = this.products.find(product => product.id == id);
            if (!product) {
                console.log(`Error: Product with ID "${id}" not found.`);
                return null;
            }
            return product;
        } catch (error) {
            console.error("Error retrieving product by ID:", error);
            return null;
        }
    }
}

export default ProductManager;
