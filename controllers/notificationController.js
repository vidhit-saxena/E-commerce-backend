const Notification = require('../models/notificationModel');

// Fetch all notifications
const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.find();
        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ message: 'Failed to fetch notifications', error });
    }
};

// Add a new notification
const addNotification = async (req, res) => {
    const { title, message, date } = req.body;
    try {
        const newNotification = new Notification({
            title,
            message,
            date: date || new Date(),
        });
        await newNotification.save();
        res.status(201).json(newNotification);
    } catch (error) {
        res.status(500).json({ message: 'Failed to add notification', error });
    }
};

module.exports = { getNotifications, addNotification };
