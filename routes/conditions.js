const express = require('express');
const router = express.Router();
const conidtionsCtrl = require('../controllers/conditions');


router.post('/scores/:id/conditions', conidtionsCtrl.create);

module.exports = router;