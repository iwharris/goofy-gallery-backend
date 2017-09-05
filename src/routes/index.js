const express = require('express');
const config = require('config');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  const baseUrl = 'https://slack.com/oauth/authorize';
  const redirectUri = encodeURIComponent(config.get('slack.redirectUri'));
  const scope = 'identity.basic,identity.avatar';
  const clientId = config.get('slack.clientId');
  const state = req.session.token ? `logged in! ${req.session.token}` : 'not logged in'
  const pageVars = {
    slack: {
      url: `${baseUrl}?scope=${scope}&client_id=${clientId}&redirect_uri=${redirectUri}`,
      button: {
        img: {
          src: 'https://platform.slack-edge.com/img/sign_in_with_slack.png',
          width: 172,
          height: 40,
        }
      }
    },
    state
  };
  res.render('index', pageVars);
});

module.exports = router;
