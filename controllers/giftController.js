const Gift = require('../models/giftModel');

exports.createGift = async(req, res) =>{
    try{
        const {name, description, price, image, category, subCategory} = req.body;
        
        const gift = new Gift({
            name,
            description,
            price,
            image,
            category,
            subCategory
        });

        const savedGift = await gift.save();
        res.status(200).json({message : 'Gift saved successfully', gift : savedGift});
    }
    catch (error){
        res.status(400).json({message : "Failed to save gift", error: error.message});
    }
};

exports.getGift = async (req, res) => {
    try{
        const gift = await Gift.find();
        res.status(200).json(gift);
    }
    catch(error){
        res.status(400).json({message : "Failed to get gift", error: error.message});
    }
};

exports.getGiftbyId = async(req, res) => {
    try{
        const gift = await Gift.findById(req.params.id);
        if(!gift){
            res.status(404).json({message : "Gift not found"});
        }
        res.status(200).json(gift);
    }
    catch(error){
        res.status(400).json({message : "Failed to get gift by id", error: error.message});
    }
};