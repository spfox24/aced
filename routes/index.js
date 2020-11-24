const express = require('express');

// router
const router = express.Router();

const passport = require('passport');

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/scores',
    failureRedirect: '/'
}));

router.get('/logout', function(req, res) {
    req.logOut();
    res.redirect('/');
});

// controller
const indexCtrl = require('../controllers/index');

// routes
router.get('/', indexCtrl.index);

module.exports = router;