const express = require('express');
const config = require('config');

const oauthRoutes = require('./routes/oauth')

const app = express();

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
