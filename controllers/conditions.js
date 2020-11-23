const Score = require('../models/score');

module.exports = {
    create,
};

function create(req, res) {
    Score.findById(req.params.id, function(err, score) {
        score.condition.push(req.body);
        console.log(score);
        score.save(function(err) {
            res.redirect(`/scores/${score._id}`);
        });
    });
}



