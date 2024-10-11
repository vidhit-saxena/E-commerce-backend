const Review = require('../models/reviewModel');
const Gift = require('../models/giftModel');

exports.createReview = async (req, res) => {
    try{
        const {giftId , user, rating, review} = req.body;

        const gift = await Gift.findById(giftId);
        if(!gift){
            return res.status(404).json({message: "Gift not found"});
        };
        const newReview = new Review({
            gift: gift._id,
            user,
            rating,
            review
        });

        const savedReview = await newReview.save();
        const reviews = await Review.find({ gift: giftId });
        const avgRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;
        gift.averageRating = avgRating;
        await gift.save();
        
        res.status(201).json({
            message: 'Review added successfully',
            review: savedReview,
          });
        } catch (error) {
          res.status(400).json({
            message: 'Failed to add review',
            error: error.message,
          });
    }
};

exports.getReviewById = async (req, res) => {
    try{
        const giftId = req.params.giftId;
        const reviews = await Review.find({ gift: giftId });
        if(!reviews){
            return res.status(404).json({message: "Review not found"});
        }
        res.status(200).json(reviews);
    } catch (error) {
         res.status(400).json({
        message: 'Failed to retrieve reviews',
        error: error.message,
    });
    }
};