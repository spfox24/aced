const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aceSchema = new Schema ({
    text: String,
}, { 
    timestamps: true
});

const playerSchema = new Schema({
    name: String,
    email: String,
    avatarURL: String,
    aces: [aceSchema],
    googleId: String
}, { 
    timestamps: true 
});

module.exports = mongoose.model('Player', playerSchema);