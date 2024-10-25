// routes/account.routes.js
const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

// Create account
router.post('/account', accountController.createAccount);

// Get all accounts
router.get('/account', accountController.getAllAccounts);

// Get account by ID
router.get('/account/:id', accountController.getAccount);

// Update account by ID
router.put('/account/:id', accountController.updateAccount);

// Delete account by ID
router.delete('/account/:id', accountController.deleteAccount);

module.exports = router;
