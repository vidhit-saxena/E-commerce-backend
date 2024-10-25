const express = require('express');
const userController = require('../controllers/userController'); // Ensure correct path
const { createUser, getUserById, getAllUsers } = require('../controllers/userController'); // Ensure the correct path

const router = express.Router();

// Route to create a user
router.post('/users', userController.createUser);

// Route to get a user by ID
router.get('/users/:id', getUserById); // Add this line to get a user by ID

// Route to get all users
router.get('/users', getAllUsers); // Add this line to get all users

// Additional routes for users (if needed)
// router.get('/users/:id', userController.getUserById);
// router.put('/users/:id', userController.updateUser);
// router.delete('/users/:id', userController.deleteUser);

module.exports = router;
