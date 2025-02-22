const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

// GET /bfhl Route
router.get('/bfhl', bfhlController.getOperationCode);

// POST /bfhl Route
router.post('/bfhl', bfhlController.processData);

module.exports = router;
