const express = require('express');
const router = express.Router();
const users = require('../controllers/auth.controller');

// Create a new User
router.post('/', users.create);

// Retrieve all Users
router.get('/', users.findAll);

// Retrieve a single User with userId
router.get('/:userId', users.findOne);

// Update a User with userId
router.put('/:userId', users.update);

// Delete a User with userId
router.delete('/:userId', users.delete);

// Delete all Users
router.delete('/', users.deleteAll);

module.exports = router;
