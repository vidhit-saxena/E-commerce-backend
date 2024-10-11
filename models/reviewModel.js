const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    gift : {
        type: mongoose.Schema.Types.ObjectId,
        ref : 'Gift',
        required : true
    },
    user : {
        type : String,
        required : true,
    },
    rating : {
        type : Number,
        required : true,
        min : 1,
        max : 5,
    },
    review : {
        type : String,
    }
    },{
        timestamps : true
    });

const Review = mongoose.model('Review', reviewSchema);
module.exports = Review;