const express = require('express');
const giftController = require('../controllers/giftController');
const router = express.Router();

router.post('/gifts',giftController.createGift);
router.get('/gifts',giftController.getGift);
router.get('/gift/:id',giftController.getGiftbyId);

module.exports = router;