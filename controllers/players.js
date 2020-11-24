const Player = require('../models/player');

module.exports = {
    index,
    addAce,
    delAce
};

function index(req, res) {
    Player.find({}, function(err, players) {
        res.render('aces', {
            players,
            user: req.user
        });
    });
}

function addAce(req, res) {
    req.user.aces.push(req.body);
    req.user.save(function(err) {
        res.redirect('/aces');
    });
}

function delAce(req, res) {

}