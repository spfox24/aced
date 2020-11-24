const express = require('express');

const scoresCtrl = require('../controllers/scores');

const router = express.Router();


router.get('/', scoresCtrl.index);
router.get('/new', isLoggedIn, scoresCtrl.new);
router.get('/:id', scoresCtrl.show);
router.post('/', isLoggedIn, scoresCtrl.create);
router.get('/:id/edit', isLoggedIn, scoresCtrl.edit);
router.put('/:id', scoresCtrl.update);
router.delete('/:id', scoresCtrl.delete);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;