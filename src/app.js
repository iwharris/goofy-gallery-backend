const express = require('express');
const session = require('express-session');
const config = require('config');
const path = require('path');


const indexRoutes = require('./routes/index');
const oauthRoutes = require('./routes/oauth')

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// Middleware
app.use(session(config.get('session')));

// app.use(express.static(path.join(__dirname + '/..', 'public')));

app.use('/', indexRoutes);
app.use('/oauth', oauthRoutes);

// catch 404 and forward to error handler
app.use((req, res, next) => {
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// error handler
app.use((err, req, res, next) => {
	res.status(err.status || 500).json({ message: err.message, error: process.env.NODE_ENV === 'development' ? err: {} })
});

module.exports = app;
