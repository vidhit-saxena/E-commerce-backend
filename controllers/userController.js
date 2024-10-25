const User = require('../models/userModel');

exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        await user.save();
        res.status(201).json({ message: 'User created', user });
    } catch (error) {
        res.status(400).json({ message: 'Error creating user', error });
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const userId = req.params.id; // Extracting userId from request parameters
        const user = await User.findById(userId); // Fetching user from the database

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json(user); // Returning the found user
    } catch (error) {
        res.status(400).json({ message: 'Error fetching user', error });
    }
};

// Get all users
exports.getAllUsers = async (req, res) => {
    try {
        const users = await User.find(); // Fetching all users from the database
        res.status(200).json(users); // Returning the list of users
    } catch (error) {
        res.status(400).json({ message: 'Error fetching users', error });
    }
};