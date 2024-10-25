const express = require('express');
const { getAllAddresses, createAddress, deleteAddress } = require('../controllers/addressController');
const router = express.Router();

router.get('/', getAllAddresses);
router.post('/', createAddress);
router.delete('/:id', deleteAddress);

module.exports = router;
