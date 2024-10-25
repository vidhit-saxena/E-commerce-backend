// controllers/account.controller.js
const Account = require('../models/accountModel');

// Create a new account
exports.createAccount = async (req, res) => {
  try {
    const { name, email, phoneNumber, password, address } = req.body;
    const account = new Account({ name, email, phoneNumber, password, address });
    await account.save();
    res.status(201).json({ message: 'Account created successfully!', account });
  } catch (error) {
    res.status(500).json({ message: 'Error creating account', error });
  }
};

// Get account by ID
exports.getAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json(account);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching account', error });
  }
};

// Get all accounts
exports.getAllAccounts = async (req, res) => {
  try {
    const accounts = await Account.find();
    res.status(200).json(accounts);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching accounts', error });
  }
};

// Update account
exports.updateAccount = async (req, res) => {
  try {
    const { name, email, phoneNumber, address } = req.body;
    const account = await Account.findByIdAndUpdate(
      req.params.id,
      { name, email, phoneNumber, address },
      { new: true }
    );
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json({ message: 'Account updated successfully!', account });
  } catch (error) {
    res.status(500).json({ message: 'Error updating account', error });
  }
};

// Delete account
exports.deleteAccount = async (req, res) => {
  try {
    const account = await Account.findByIdAndDelete(req.params.id);
    if (!account) {
      return res.status(404).json({ message: 'Account not found' });
    }
    res.status(200).json({ message: 'Account deleted successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting account', error });
  }
};
