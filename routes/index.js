const express = require('express');

// router
const router = express.Router();

// controller
const indexCtrl = require('../controllers/index');

// routes
router.get('/', indexCtrl.index);

module.exports = router;