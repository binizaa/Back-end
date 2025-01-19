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
                throw new Error(`The product with code "${product.code}" already exists.`);
            }
    
            product.id = this.products.length > 0 ? this.products[this.products.length - 1].id + 1 : 1;
    
            this.products.push(product);
    
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2), 'utf-8');
            console.log("Product added successfully:", product);
    
            return { status: 'success', product };
        } catch (error) {
            throw new Error(`${error.message}`);
        }
    }  
    
    async deleteProduct(idProduct) {
        try {
            this.products = await this.getProducts();
    
            const productIndex = this.products.findIndex(product => product.id === idProduct);
            if (productIndex === -1) {
                throw new Error(`Product with ID ${idProduct} not found`);
            }
    
            const [deletedProduct] = this.products.splice(productIndex, 1);
    
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2), 'utf-8');
            console.log("Product deleted successfully:", deletedProduct);
    
            return { status: 'success', product: deletedProduct };
        } catch (error) {
            console.error("Error deleting product:", error.message);
            throw new Error(`Failed to delete product: ${error.message}`);
        }
    }
    

    async getProducts() {
        try {
            const result = await fs.promises.readFile(this.path, 'utf-8');
            const products = JSON.parse(result);
            return products
        } catch (error) {
            if (error.code === 'ENOENT') {
                console.warn("File not found. Returning an empty product list.");
            } else {
                console.error("Error reading the file:", error);
            }
            return [];
        }
    }

    async updateProduct(idProduct, updatedProduct) {
        try {
            this.products = await this.getProducts();
    
            const productIndex = this.products.findIndex(product => product.id === idProduct);
            if (productIndex === -1) {
                throw new Error(`Product with ID ${idProduct} not found.`);
            }
    
            this.products[productIndex] = updatedProduct;
    
            await fs.promises.writeFile(this.path, JSON.stringify(this.products, null, 2), 'utf-8');
            console.log("Product updated successfully:", updatedProduct);
    
            return { status: 'success', product: updatedProduct };
        } catch (error) {
            console.error("Error updating product:", error.message);
            throw new Error(`Failed to update product: ${error.message}`);
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
