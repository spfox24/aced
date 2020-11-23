const express = require('express');

const scoresCtrl = require('../controllers/scores');

const router = express.Router();


router.get('/', scoresCtrl.index);
router.get('/new', scoresCtrl.new);
router.get('/:id', scoresCtrl.show);
router.post('/', scoresCtrl.create);
router.get('/:id/edit', scoresCtrl.edit);
router.put('/:id', scoresCtrl.update);
router.delete('/:id', scoresCtrl.delete);

module.exports = router;