const express = require('express');
const reviewController = require('../controllers/reviewController');
const router = express();

router.post('/reviews',reviewController.createReview);
router.get('/reviews/:giftId', reviewController.getReviewById);

module.exports = router;