const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// Route to get all orders for a user
router.get('/orders/:userId', orderController.getUserOrders);

// Route to create an order
router.post('/orders', orderController.createOrder);

module.exports = router;
