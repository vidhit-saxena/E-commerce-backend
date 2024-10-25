const express = require('express');
const router = express.Router();
const userProfileController = require('../controllers/userProfileController');

// Get profile by email
router.get('/:email', userProfileController.getUserProfile);

// Update profile by email
router.put('/:email', userProfileController.updateUserProfile);

// Create new profile
router.post('/', userProfileController.createUserProfile);

module.exports = router;
