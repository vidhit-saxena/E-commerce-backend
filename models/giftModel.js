const mongoose = require('mongoose');

const giftSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    description : {
        type : String,
        required : true
    },
    price : {
        type : Number,
        required : true,
    },
    image : {
        type : String,
        required : true, 
    }, 
    category : {
        type : String,
        enum : ['Men', 'Women', 'Kids'],
        required : true
    },
    subCategory : {
        type : String,
        enum : ['Corporate','Festival'],
        required : true
    },
    averageRating: {
        type: Number,
        default: 0
      }
}, {
    timestamps: true
  });

const Gift = mongoose.model('Gift', giftSchema);
module.exports = Gift;