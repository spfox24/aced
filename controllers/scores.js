const Score = require('../models/score');

module.exports = {
    index,
}

function index(req, res) {
    Score.find({}, function(err, scores) {
        res.render('scores/index', { scores });
    });
}