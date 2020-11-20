const Score = require('../models/score');

module.exports = {
    index,
    show,
    new: newScore,
    create,
    edit,
    update
}

function index(req, res) {
    Score.find({}, function(err, scores) {
        req.date = new Date().toLocaleDateString();
        res.render('scores/index', { scores });
    });
}

function show(req, res) {

    Score.findById(req.params.id, function(err, scores) {
        req.date = new Date().toLocaleDateString();
        res.render('scores/show', { scores });
    });
}

function newScore(req, res) {
    res.render('scores/new', { title: 'Add Score' });
}

function create(req, res) {
/*
    const date = new Date(req.body.date);

    req.body.date = date.toDateString();

    console.log(req.body.date);
*/
    const score = new Score(req.body);

    score.save(function(err) {
        if(err) return res.render('scores/new');
        console.log(req.body);
        res.redirect('/scores');
    });
}

function edit(req, res) {
    res.render('scores/edit');
}

function update(req, res) {
    
};  