
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const port = process.env.PORT || 3000;

const indexRouter = require('./routes/index');
const scoresRouter = require('./routes/scores');
const highScoreRouter = require('./routes/highscores');
const conditionsRouter = require('./routes/conditions');
const playersRouter = require('./routes/players');


const morgan = require('morgan');
const methodOverride = require('method-override');


require('dotenv').config()
require('./config/database');
require('./config/passport');

// express app
const app = express();

// server settings
app.set('view engine', 'ejs');

// middleware
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', indexRouter);
app.use('/scores', scoresRouter);
app.use('/highscores', highScoreRouter);
app.use('/', conditionsRouter);
app.use('/', playersRouter);



app.listen(port, function() {
    console.log(`Express is listening on port:${port}`)
});

