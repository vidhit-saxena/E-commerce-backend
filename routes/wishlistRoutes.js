const express = require('express');
const router = express.Router();
const wishlistController = require('../controllers/wishlistController');

// Add to wishlist
router.post('/wishlist/add', wishlistController.addToWishlist);

// Get user's wishlist
router.get('/wishlist/:userId', wishlistController.getWishlist);

// Remove from wishlist
router.delete('/wishlist/remove', wishlistController.removeFromWishlist);

module.exports = router;
