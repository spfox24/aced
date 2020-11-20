const express = require('express');

const router = express.Router();

const highScoresCtrl = require('../controllers/highscores');


router.get('/', highScoresCtrl.index);

module.exports = router;