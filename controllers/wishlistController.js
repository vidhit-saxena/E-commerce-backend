const Wishlist = require('../models/wishlistModel');

// Add product to wishlist
exports.addToWishlist = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        const newItem = new Wishlist({ userId, productId });
        await newItem.save();
        res.status(200).json({ message: 'Product added to wishlist', wishlistItem: newItem });
    } catch (error) {
        res.status(500).json({ message: 'Error adding product to wishlist', error });
    }
};

// Get wishlist items for a user
exports.getWishlist = async (req, res) => {
    try {
        const { userId } = req.params;
        const wishlist = await Wishlist.find({ userId }).populate('productId');
        res.status(200).json({ wishlist });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching wishlist', error });
    }
};

// Remove product from wishlist
exports.removeFromWishlist = async (req, res) => {
    try {
        const { userId, productId } = req.body;
        await Wishlist.findOneAndDelete({ userId, productId });
        res.status(200).json({ message: 'Product removed from wishlist' });
    } catch (error) {
        res.status(500).json({ message: 'Error removing product from wishlist', error });
    }
};
