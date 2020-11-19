
const express = require('express');
const port = 3000;

const indexRouter = require('./routes/index');
const scoresRouter = require('./routes/scores');



const morgan = require('morgan');
const methodOverride = require('method-override');

require('./config/database');

// express app
const app = express();

// server settings
app.set('view engine', 'ejs');

// middleware
app.use(methodOverride('_method'));
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/', indexRouter);
app.use('/scores', scoresRouter);




app.listen(port, function() {
    console.log(`Express is listening on port:${port}`)
});

