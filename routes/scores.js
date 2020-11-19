const express = require('express');

const scoresCtrl = require('../controllers/scores');

const router = express.Router();


router.get('/', scoresCtrl.index);



module.exports = router;