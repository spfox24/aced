const router = require('express').Router();
const playersCtrl = require('../controllers/players');

router.get('/aces', playersCtrl.index);

router.post('/aces', isLoggedIn, playersCtrl.addAce);
router.delete('/aces/:id', isLoggedIn , playersCtrl.delAce);

function isLoggedIn(req, res, next) {
    if(req.isAuthenticated()) return next();
    res.redirect('/auth/google');
}

module.exports = router;