const { Order } = require('../models/orderModel');

// Fetch orders for a user
// const getUserOrders = async (req, res) => {
//     const userId = req.params.userId;
//     try {
//         const orders = await Order.find({ userId })
//             .populate('products.productId'); // Populate product details
//         if (!orders) {
//             return res.status(404).json({ message: 'No orders found for this user' });
//         }
//         res.status(200).json(orders);
//     } catch (error) {
//         console.error('Error fetching orders:', error);
//         res.status(500).json({ message: 'Error fetching orders', error: error.message });
//     }
// };

// module.exports = {
//     getUserOrders,
// };
exports.getUserOrders = async (req, res) => {
    const userId = req.params.userId;
    try {
        const orders = await Order.find({ userId }).populate('products.productId');
        if (!orders) {
            return res.status(404).json({ message: 'No orders found for this user' });
        }
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Error fetching orders', error: error.message });
    }
};


// exports.getUserOrders = async (req, res) => {
//     try {
//         const userId = req.params.userId;
//         const orders = await Order.find({ userId }).populate('products.productId');
//         res.status(200).json(orders);
//     } catch (error) {
//         res.status(500).json({ message: "Error fetching orders", error });
//     }
// };

// Create a new order
exports.createOrder = async (req, res) => {
    try {
        const { userId, products } = req.body;
        const newOrder = new Order({
            userId,
            products
        });
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        res.status(500).json({ message: "Error creating order", error });
    }
};
