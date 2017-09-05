module.exports = {
	slack: {
		clientId: '',
		clientSecret: '',
		baseUrl: 'https://slack.com/api',
		redirectUri: '',
	},
	session: {
		secret: '',
		resave: false,
		rolling: false,
		saveUninitialized: false,
		cookie: {
			path: '/',
			secure: false,
			httpOnly: true,
			maxAge: null
		}
	}
};
