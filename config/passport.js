const passport = require('passport');
const Player = require('../models/player');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb) {
    Player.findOne({ googleId: profile.id }, function(err, player) {
        if(err) return cb(err);
        if(player) {
            return cb(null, player)
        } else {
            const newPlayer = new Player({
                name: profile.displayName,
                email: profile.emails[0].value,
                googleId: profile.id
            });
            newPlayer.save(function(err) {
                if(err) return cb(err);
                return cb(null, player);
            });
        }
    });
}));


passport.serializeUser(function(player, done) {
    done(null, player);
});

passport.deserializeUser(function(id, done) {
    Player.findById(id, function(err, player) {
        done(err, player);
    });
});