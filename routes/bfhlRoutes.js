
// routes/bfhlRoutes.js
const express = require('express');
const router = express.Router();
const bfhlController = require('../controllers/bfhlController');

// POST Method for Data Processing
router.post('/', bfhlController.postData);

// GET Method for operation code
router.get('/', bfhlController.getOperationCode);

module.exports = router;
