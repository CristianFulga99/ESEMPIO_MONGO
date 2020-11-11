var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');
var moviesRouter= require('./routes/movie');
var listRouter= require('./routes/list');
var AdvSRouter= require('./routes/advanced-search');

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
//app.use('/users', usersRouter);
app.use('/movie', moviesRouter);
app.use('/list', listRouter);
app.use('/advanced-search', AdvSRouter);

module.exports = app;
