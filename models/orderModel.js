const mongoose = require('mongoose');

// Product Schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
});

// Register Product model
const Product = mongoose.model('Product', productSchema);

// Order Schema
const orderSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',  // Reference to the User model
        required: true,
    },
    products: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',  // Reference to the Product model
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            }
        }
    ],
    orderDate: {
        type: Date,
        default: Date.now,
    },
    status: {
        type: String,
        default: 'Pending',
    }
});

// Register Order model
const Order = mongoose.model('Order', orderSchema);

// Export models
module.exports = {
    Product,
    Order,
};



// const mongoose = require('mongoose');

// const orderSchema = new mongoose.Schema({
//     userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     products: [{
//         productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
//         quantity: { type: Number, required: true },
//         price: { type: Number, required: true }
//     }],
//     orderDate: { type: Date, default: Date.now },
//     status: { type: String, enum: ['Pending', 'Shipped', 'Delivered'], default: 'Pending' }
// });

// module.exports = mongoose.model('Order', orderSchema);
