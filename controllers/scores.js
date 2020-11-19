const Score = require('../models/score');

module.exports = {
    index,
    show,
    new: newScore,
    create
}

function index(req, res) {
    Score.find({}, function(err, scores) {
        res.render('scores/index', { scores });
    });
}

function show(req, res) {
    Score.findById(req.params.id, function(err, scores) {
        res.render('scores/show', { scores });
    });
}

function newScore(req, res) {
    res.render('scores/new', { title: 'Add Score' });
}

function create(req, res) {
    
    const score = new Score(req.body);
    
    score.save(function(err) {
        if(err) return res.render('scores/new');
        res.redirect('/scores');
    });
}
