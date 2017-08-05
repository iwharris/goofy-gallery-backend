var express = require('express');
var router = express.Router();

// router.use(function(req, res, next) {
// 	// console.log('Executing', req.statusCode, res.statusCode);
// 	next();
// });

/* Slack OAuth. */
router.get('/slack', function(req, res, next) {
	var code = req.query.code;
	var state = req.query.state;
	var error = req.query.error;

	if (code && !error) {

	}

	return res.json({
		id: 123,
		name: 'ian'
	});
});

module.exports = router;
