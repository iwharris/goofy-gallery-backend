const request = require('request-promise-native');
const config = require('config');

const slackConfig = config.get('slack');
const baseUrl = slackConfig.baseUrl;

async function getToken(code) {
	console.log({
		client_id: slackConfig.clientId,
		client_secret: slackConfig.clientSecret,
		redirect_uri: encodeURIComponent(slackConfig.redirectUri),
		code
	});
	return request.get({
		url: `${baseUrl}/oauth.access`,
		qs: {
			client_id: slackConfig.clientId,
			client_secret: slackConfig.clientSecret,
			// redirect_uri: encodeURIComponent(slackConfig.redirectUri),
			code
		},
		json: true
	})
	.then(body => {
		if (!body.ok) {
			console.warn('');
		}
		console.log('body', body);
		return body;
	})
}

async function revokeToken(token) {
	request.post({
		url: `${baseUrl}/auth.revoke`,
		qs: { token },
		json: true
	})
	.then(body => {
		return body;
	});
}

module.exports = {
	getToken,
	revokeToken,
}
