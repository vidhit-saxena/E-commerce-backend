const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: String,
    price: { type: Number, required: true }
});

// module.exports = mongoose.model('Product', productSchema);
// Check if model already exists to avoid OverwriteModelError
module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);