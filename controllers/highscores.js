module.exports = {
    index
}

function index(req, res) {
    res.render('highscore', {
        user: req.user
    });
}