const express = require('express');

const scoresCtrl = require('../controllers/scores');

const router = express.Router();


router.get('/', scoresCtrl.index);
router.get('/new', scoresCtrl.new);
router.get('/:id', scoresCtrl.show);
router.post('/', scoresCtrl.create);


module.exports = router;