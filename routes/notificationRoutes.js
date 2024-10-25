const express = require('express');
const router = express.Router();
const { getNotifications, addNotification } = require('../controllers/notificationController');

// GET request to fetch notifications
router.get('/notifications', getNotifications);

// POST request to add a new notification
router.post('/notifications', addNotification);

module.exports = router;
