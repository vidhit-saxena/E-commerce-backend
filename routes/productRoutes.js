// const express = require('express');
// const productController = require('../controllers/productController'); // Ensure correct path

// const router = express.Router();

// // Route to create a product
// router.post('/products', productController.createProduct);

// // Additional routes for products (if needed)
// // router.get('/products/:id', productController.getProductById);
// // router.put('/products/:id', productController.updateProduct);
// // router.delete('/products/:id', productController.deleteProduct);

// module.exports = router;
const express = require('express');
// const { createProduct } = require('../controllers/productController');  // Ensure the correct path and function name
const { createProduct, getProductById, getAllProducts } = require('../controllers/productController'); // Ensure correct path


const router = express.Router();

// Route to create a product
router.post('/products', createProduct);
// Route to get a product by ID
router.get('/products/:id', getProductById);

// Route to get all products
router.get('/products', getAllProducts);

module.exports = router;
