var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/slack', function(req, res, next) {
  res.json({
    id: 123,
    name: 'ian'
  });
});

module.exports = router;
