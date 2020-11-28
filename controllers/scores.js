const Score = require('../models/score');

module.exports = {
    index,
    show,
    new: newScore,
    create,
    edit,
    update,
    delete: deleteRound
}

function index(req, res) {
    Score.find({})
    .populate('userId').exec(function(err, score) {
        console.log(score);
                req.date = new Date().toLocaleString();
                res.render('scores/index', { 
                    score, user: req.user
            });
        });
    }
    /*
    Score.find({}, function (err, scores) {
        req.date = new Date().toLocaleDateString();
        res.render('scores/index', {
            scores,
            user: req.user
        });
    });
    */

function show(req, res) {
    
    Score.findById(req.params.id, function (err, scores) {
        req.date = new Date().toLocaleDateString();
        res.render('scores/show', {
            scores,
            user: req.user
        });
    });
}

function newScore(req, res) {
    res.render('scores/new', {
        title: 'Add Score',
        user: req.user
    });
}

function create(req, res) {
   req.body.userId = req.player.id

    const score = new Score(req.body);

    score.save(function (err) {
        if (err) return res.render('scores/new');
        // console.log(req.body);
        res.redirect('/scores');
    });
}

function edit(req, res) {
    scoreId = req.params.id;

    Score.findById(req.params.id, function(err, score) {
        res.render('scores/edit', { 
            score,
            user: req.user
         });
    });
}

function update(req, res) {
    Score.findByIdAndUpdate(req.params.id, req.body, function(err, score) {
        res.redirect(`/scores/${req.params.id}`);
    });
}

function deleteRound(req, res) {
    Score.findByIdAndDelete(req.params.id, function(err, score) {
        if(err) console.log(err);
        score.save(function(err) {
            res.redirect(`/scores`);
        });
    });
}

