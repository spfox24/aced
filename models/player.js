const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const aceSchema = new Schema ({
    course: {
        type: String,
        enum: ['Apache Shores', 'Bible Ridge', 'Brazos East', 'Brushy Creek', 'Cat Hollow', 'Circle C',
        'Davis', 'Falcon Pointe', 'Flying Armadillo', 'Mary Moore Seawright',
        'Met Center', 'Northtown', 'Old Settlers Park', 'Rivery', 'Roy G Guerrero',
        'San Gabriel', 'Wells Branch', 'Wilco', 'Zilker'
        ]
    },
    hole: {
        type: Number,
        require: true,
        min: 1,
        max: 18
    },
    date: {
        type: Date,
        default: 
        function() {
            const date = new Date();
            const srtDate = date.toLocaleDateString();
            return srtDate
        } 
    },
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