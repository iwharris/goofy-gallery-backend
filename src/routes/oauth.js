const express = require('express');
const router = express.Router();
const slackRequests = require('../slack/requests');

/* Slack OAuth. */
router.get('/slack', async (req, res, next) => {
	var code = req.query.code;
	var state = req.query.state;
	var error = req.query.error;

	let body;
	if (code && !error) {
		body = await slackRequests.getToken(code);
		if (!!body.ok) {
			req.session.token = body.access_token;
		} else {
			error = body.error;
		}
	}
	if (error) {
		console.warn('encountered error during oauth: ' + error);
	}
	return res.redirect('/');
});

module.exports = router;
