// const Product = require('../models/productModel');

// const createProduct = async (req, res) => {
//     try {
//         const product = new Product(req.body);
//         await product.save();
//         res.status(201).json({ message: 'Product created', product });
//     } catch (error) {
//         res.status(400).json({ message: 'Error creating product', error });
//     }
// };
const Product = require('../models/productModel'); // Ensure correct path

// Function to create a product
const createProduct = async (req, res) => {
    try {
        const { name, description, price } = req.body;

        // Create a new product
        const newProduct = new Product({
            name,
            description,
            price
        });

        await newProduct.save();
        res.status(201).json({ message: 'Product created successfully', newProduct });
    } catch (error) {
        res.status(400).json({ message: 'Error creating product', error });
    }
};

// Function to get a product by ID
const getProductById = async (req, res) => {
    try {
        const productId = req.params.id; // Extracting productId from request parameters
        const product = await Product.findById(productId); // Fetching product from the database

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }

        res.status(200).json(product); // Returning the found product
    } catch (error) {
        res.status(400).json({ message: 'Error fetching product', error });
    }
};

// Function to get all products
const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find(); // Fetching all products from the database
        res.status(200).json(products); // Returning the list of products
    } catch (error) {
        res.status(400).json({ message: 'Error fetching products', error });
    }
};

module.exports = {
    createProduct,
    getProductById,
    getAllProducts
};
// module.exports = {
//     createProduct
// };
