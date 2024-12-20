class Product {
    constructor({ title, description, price, thumbnail, code, stock }) {
        this.title = title;
        this.description = description;
        this.price = price;
        this.thumbnail = thumbnail;
        this.code = code;
        this.stock = stock;
    }
}

class ProductManager {
    constructor() {
        this.products = []; 
    }

    addProduct(product) {
        if (this.products.find(p => p.code === product.code)) {
            console.log(`Error: Product with code "${product.code}" already exists.`);
            return;
        }

        product.id = this.products.length + 1;

        this.products.push(product);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.log(`Error: Product with ID "${id}" not found.`);
            return null;
        }
        return product;
    }
}

const productManager = new ProductManager();

const product1 = new Product({
    title: "Laptop",
    description: "A high-performance laptop",
    price: 1200,
    thumbnail: "laptop.jpg",
    code: "LP001",
    stock: 10
});

const product2 = new Product({
    title: "Smartphone",
    description: "A modern smartphone",
    price: 800,
    thumbnail: "smartphone.jpg",
    code: "SP001",
    stock: 15
});

const product3 = new Product({
    title: "Tablet",
    description: "A lightweight tablet",
    price: 500,
    thumbnail: "tablet.jpg",
    code: "LP001", // Duplicate code
    stock: 5
});

productManager.addProduct(product1);
productManager.addProduct(product2);
productManager.addProduct(product3); // This will trigger an error for duplicate code

console.log(productManager.getProducts());

console.log(productManager.getProductById(1));
