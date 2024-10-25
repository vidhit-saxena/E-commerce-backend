const UserProfile = require('../models/userProfileModel');

// Get user profile by email
exports.getUserProfile = async (req, res) => {
    const { email } = req.params;
    try {
        const userProfile = await UserProfile.findOne({ email });
        if (!userProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }
        res.json(userProfile);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching profile', error });
    }
};

// Update user profile
exports.updateUserProfile = async (req, res) => {
    const { email } = req.params;
    const { name, phoneNumber, address, profilePicture } = req.body;

    try {
        const userProfile = await UserProfile.findOneAndUpdate(
            { email },
            { name, phoneNumber, address, profilePicture },
            { new: true }
        );

        if (!userProfile) {
            return res.status(404).json({ message: 'Profile not found' });
        }

        res.json({ message: 'Profile updated successfully', userProfile });
    } catch (error) {
        res.status(500).json({ message: 'Error updating profile', error });
    }
};

// Create new user profile
exports.createUserProfile = async (req, res) => {
    const { name, email, phoneNumber, address, profilePicture } = req.body;

    try {
        const newUserProfile = new UserProfile({
            name,
            email,
            phoneNumber,
            address,
            profilePicture,
        });

        await newUserProfile.save();
        res.status(201).json({ message: 'Profile created successfully', newUserProfile });
    } catch (error) {
        res.status(500).json({ message: 'Error creating profile', error });
    }
};
