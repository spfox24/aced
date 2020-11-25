const Player = require('../models/player');

module.exports = {
    index,
    addAce,
    delAce
};

function index(req, res) {
    Player.find({}, function(err, players) {
        req.date = new Date().toLocaleDateString();
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
    Player.findByIdAndDelete(req.params.id, function(err, ace) {
        if(err) console.log(err);
        ace.save(function(err) {
            res.redirect(`/aces`);
        });
    });
}