const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const conditionSchema = new Schema({
    content: String,
    rating: {
        type: Number,
        min: 1,
        max: 5,
        default: 5
    }
}, {
    timestamps: true
});

const scoreSchema = new Schema({
    course: {
        type: String,
        enum: ['Apache Shores', 'Bible Ridge', 'Brazos East', 'Brushy Creek', 'Cat Hollow', 'Circle C',
            'Davis', 'Falcon Pointe', 'Flying Armadillo', 'Mary Moore Seawright',
            'Met Center', 'Northtown', 'Old Settlers Park', 'Rivery', 'Roy G Guerrero',
            'San Gabriel', 'Wells Branch', 'Wilco', 'Zilker'
        ]
    },
    date: {
        type: Date,
    },
    score: {
        type: Number,
        required: true
    },
    condition: [conditionSchema],
    userId: [{type: mongoose.Types.ObjectId, ref: 'Player'}],
}, {
    timestamps: true
});


module.exports = mongoose.model('Score', scoreSchema);